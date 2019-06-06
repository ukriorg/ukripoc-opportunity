import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentList } from "./index";
import { ApplicationType, WebsiteListingType } from "../../types";

const application: ApplicationType  = "Application";
const websiteListing: WebsiteListingType  = "WebsiteListing";

const orderedOpportunity = [
    {
        __typename: websiteListing,
        id: "1",
        rank: 0,
        lastPublished: "",
        description: "Test webs site listing",
    },
    {
        __typename: application,
        id: "1",
        rank: 0,
        openApplication: "",
        closeApplication: "",
    },
];

describe("WorkflowComponentList", () => {
    it("renders correctly", () => {
        const tree = renderer.create(
            <WorkflowComponentList 
                orderedOpportunity={ orderedOpportunity } />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

