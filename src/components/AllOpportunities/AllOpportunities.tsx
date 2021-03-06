import React, { FC, HTMLAttributes } from "react";
import LoadingBox from "@govuk-react/loading-box";
import Button from "@govuk-react/button";
import { Query } from "react-apollo";

import { Link } from "@reach/router";

import gql from "graphql-tag";

import Table from "@govuk-react/table";
import { ukriGreen } from "../../theme";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPP = gql`
    {
        listOpportunitys {
            items {
                name
                description
                id
                opportunityComplete
            }
        }
    }
`;

export const AllOpportunities: FC<Props> = ({ ...props }) => (
    <div>
        <Query query={GET_OPP} fetchPolicy="cache-and-network">
            {({ loading, error, data, refetch }: any) => {
                if (error) return `Error! ${error.message}`;
                return (
                    <LoadingBox loading={loading}>
                        <Table caption="All opportunities">
                            {data &&
                                data.listOpportunitys &&
                                data.listOpportunitys.items.map(
                                    (opportunity: any, i: any) => (
                                        <Table.Row key={i}>
                                            <Table.Cell>
                                                <Link
                                                    to={`/setup/${
                                                        opportunity.id
                                                    }`}
                                                >
                                                    {opportunity.name}
                                                </Link>
                                            </Table.Cell>
                                            <Table.Cell>
                                                {opportunity.opportunityComplete
                                                    ? "Done"
                                                    : "Not done"}
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                )}
                        </Table>
                    </LoadingBox>
                );
            }}
        </Query>
        <Button as={Link} to="opportunity" buttonColour={ukriGreen}>
            Add opportunity
        </Button>
    </div>
);

export default AllOpportunities;
