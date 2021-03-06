import express from "express";
import bodyParser from "body-parser";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import AWS from "aws-sdk";
import console = require("console");

AWS.config.region = "eu-west-1";

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

export const getSNSARNName = (
    partition: string,
    service: string,
    region: string = AWS.config.region as string,
    accountId: string,
    topicName: string
): string => `arn:${partition}:${service}:${region}:${accountId}:${topicName}`;

const saveListing = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    listing: WebsiteListing
) => {
    await client
        .put({
            TableName,
            Item: listing
        })
        .promise();
};

const getApplications = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<Application[]> => {
    console.log({ TableName });
    const result = await client
        .query({
            TableName,
            ExpressionAttributeValues: { ":o": opportunityId },
            IndexName: "gsi-Application",
            KeyConditionExpression: "applicationOpportunityId = :o"
        })
        .promise();

    return result.Items || [];
};

const getListing = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    listingId: string
): Promise<WebsiteListing | undefined> => {
    let result = await client
        .get({ TableName, Key: { id: listingId } })
        .promise();

    return result.Item as WebsiteListing;
};

const getOpportunity = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<Opportunity | undefined> => {
    let result = await client
        .get({ TableName, Key: { id: opportunityId } })
        .promise();

    return result.Item as Opportunity;
};

const postSNSMessage = async (
    topicName: string,
    accountId: string,
    message: any
): Promise<AWS.SNS.PublishResponse> => {
    const sns = new AWS.SNS();
    const TopicArn = getSNSARNName(
        "aws",
        "sns",
        undefined,
        accountId,
        topicName
    );
    return new Promise((resolve, reject) => {
        sns.publish(
            {
                TopicArn,
                Message: JSON.stringify(message)
            },
            function(err, data) {
                if (err) {
                    console.error(err.stack);
                    reject("Could not push to SNS");
                }
                console.log("push sent");
                console.log(data);

                resolve(data);
            }
        );
    });
};

// declare a new express app
const app = express();
app.use(bodyParser.json());

if (process.env && process.env.env && process.env.env !== "sunyadev") {
    app.use(awsServerlessExpressMiddleware.eventContext());
}

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// 1. get listing id, opportunity id from post
// 2. get listing from DynamoDb
// 3. add listing in format provided in full-event.json to SNS
// 4. add `lastPublished` to listing in DynamoDb

app.post("/opportunity-listing/publish", async (req, res) => {
    console.log("req", req.body);
    try {
        const { listingId, opportunityId, description } = req.body;
        // console.log(process.env);
        const env = process.env.ENV;
        const apiId = process.env.AppSyncApiId;

        if (!env || !apiId || !listingId || !opportunityId) {
            console.error(
                "An environment, api id, listing id and opportunity id must be set"
            );
            return res.status(404).json({});
        }

        const client = new AWS.DynamoDB.DocumentClient({
            region: "eu-west-1"
        });

        const opportunityTableName = getDBTableName(env, apiId, "Opportunity");
        const opportunity = await getOpportunity(
            client,
            opportunityTableName,
            opportunityId
        );
        console.log("opportunity", opportunity);
        if (!opportunity) {
            console.error(
                `The opportunity ${opportunityId} is not was not found`
            );

            throw new Error(`Opportunity not found`);
        }

        const listingTableName = getDBTableName(env, apiId, "WebsiteListing");
        const listing = await getListing(client, listingTableName, listingId);
        const now = new Date().toISOString();

        if (!listing) {
            console.error(
                `The listing, ${listingId} is not part of the opportunity, ${opportunityId}`
            );

            throw new Error(`The listing couldn't be found in the opportunity`);
        }

        listing.lastPublished = now;
        console.log({ description, now });

        if (description) {
            listing.description = description;
        }

        // write new data to DB
        await saveListing(client, listingTableName, listing);

        const applications = await getApplications(
            client,
            getDBTableName(env, apiId, "Application"),
            opportunityId
        );

        let openDate: string | undefined;
        let closeDate: string | undefined;

        if (applications.length) {
            const app =
                applications.length === 1
                    ? applications[0]
                    : applications.sort(
                          (a, b) => (a.rank || 0) - (b.rank || 0)
                      )[0];
            openDate = app.openApplication;
            closeDate = app.closeApplication;
        }

        const message: ListingEvent = {
            id: listing.id,
            opportunityId: opportunity.id,
            name: opportunity.name,
            description: listing.description,
            funders: opportunity.funders,
            openDate,
            closeDate,
            lastPublished: listing.lastPublished
        };

        const post = await postSNSMessage(
            `OpportunityListingUpdate-${env}`,
            "475991803334",
            message
        );

        if (post) {
            res.json({
                success: "Website listing success.",
                url: req.url,
                body: req.body
            });
        } else {
            console.error(
                "There was an error processing the listing publish event: "
            );
            return res.status(404).json({});
        }
    } catch (error) {
        console.error(
            "There was an error processing the listing publish event: ",
            error
        );
        return res.status(404).json({});
    }
});

app.listen(3000, function() {
    console.log("publish opportunity listing started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export default app;
