import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";
import { UpdateOpportunityMutation } from "../../API";
import { navigate } from "@reach/router";
import { Opportunity } from "../../types";

const GET_OPP = gql(getOpportunity);
const UPDATE_OPPORTUNITY = gql(updateOpportunity);

interface Props extends React.HTMLAttributes<HTMLElement> {
    opportunityId?: string;
}

export const SetupOpportunityPage: FC<Props> = (props: Props) => {
    const opportunityId = props.opportunityId;
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        },
        fetchPolicy: "cache-and-network"
    });

    const updateOpportunityMutation = useMutation<UpdateOpportunityMutation>(
        UPDATE_OPPORTUNITY
    );

    const finishOpportunity = useCallback(async () => {
        const result = await updateOpportunityMutation({
            variables: {
                input: { id: props.opportunityId, typeComplete: true }
            }
        });

        const { res, loading, error } = result;
        // @todo handle errrrorrr

        if (res) {
            navigate(`/`);
        }
    }, [updateOpportunityMutation, props.opportunityId]);

    return (
        <SetupOpportunity
            opportunity={data}
            finishOpportunity={finishOpportunity}
        />
    );
};

export default SetupOpportunityPage;
