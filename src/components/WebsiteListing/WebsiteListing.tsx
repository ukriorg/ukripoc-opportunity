import React, { FC, useState, useCallback } from "react";
import Button from "@govuk-react/button";
import P from "@govuk-react/paragraph";
import Details from "@govuk-react/details";
import TextArea from "@govuk-react/text-area";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Caption from "@govuk-react/caption";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import LoadingBox from "@govuk-react/loading-box";

import { ukriGreen, Title, LinkButton } from "../../theme";

import { GetWebsiteListingQuery } from "../../API";

interface Props {
    updateWebsiteListing: (name: string) => void;
    websiteListing?: GetWebsiteListingQuery;
}

export const WebsiteListing: FC<Props> = ({
    updateWebsiteListing,
    websiteListing
}) => {
    const defaultListingDescription =
        websiteListing &&
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.description
            ? websiteListing.getWebsiteListing.description
            : "";

    const [listingDescription, setlistingDescription] = useState(
        defaultListingDescription
    );

    const [loading, setLoading] = useState(false);
    const [textAreaMeta, settextAreaMeta] = useState({
        error: "",
        touched: false
    });

    const onButtonClick = useCallback(() => {
        setLoading(true);
        if (listingDescription.trim() === "") {
            settextAreaMeta({
                error: "Please fill out the description",
                touched: true
            });
            setLoading(false);
            return false;
        }
        updateWebsiteListing(listingDescription);
    }, [listingDescription, updateWebsiteListing]);

    const onInputChange = useCallback(event => {
        setlistingDescription(event.target.value);
    }, []);

    const opportunityName =
        websiteListing &&
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.opportunity
            ? websiteListing.getWebsiteListing.opportunity.name
            : "";

    const opportunityId =
        websiteListing &&
        websiteListing.getWebsiteListing &&
        websiteListing.getWebsiteListing.opportunity
            ? websiteListing.getWebsiteListing.opportunity.id
            : "";

    return (
        <LoadingBox loading={loading}>
            <Breadcrumbs>
                <Breadcrumbs.Link href={`/setup/${opportunityId}`}>
                    Opportunity setup
                </Breadcrumbs.Link>
                Website listing
            </Breadcrumbs>
            <Caption mb={1}>{opportunityName}</Caption>
            <Title>Website listing</Title>
            <Details summary="About this workflow component">
                The public website component allows you to define the
                opportunity details that are visible to optential applicants via
                the UKRI website. Only information defined within this component
                will be published. If you have added an application component,
                open and close dates will be published.
            </Details>
            <P mb={0}>
                Open date: Unavailable (set in the Application component)
            </P>
            <P>Close date: Unavailable (set in the Application component)</P>
            <P mb={3} mt={6}>
                **High level summary**
            </P>

            <TextArea
                mb={3}
                input={{
                    onChange: onInputChange,
                    value: listingDescription
                }}
                meta={textAreaMeta}
            />

            <GridRow>
                <GridCol>
                    <Button buttonColour={ukriGreen} onClick={onButtonClick}>
                        Publish
                    </Button>
                </GridCol>
                <GridCol setWidth="90%">
                    <LinkButton onClick={onButtonClick}>
                        Save and return without publishing
                    </LinkButton>
                </GridCol>
            </GridRow>
        </LoadingBox>
    );
};

export default WebsiteListing;
