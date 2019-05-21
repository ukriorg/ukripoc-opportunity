import React, { FC, HTMLAttributes } from "react";

import { Query } from "react-apollo";

import { gql } from "apollo-boost";

import Table from "@govuk-react/table";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPP = gql`
    {
        listOpportunitys {
            items {
                name
                description
            }
        }
    }
`;

export const AllOpportunities: FC<Props> = ({ ...props }) => (
    <div>
        <Query query={GET_OPP}>
            {({ loading, error, data, refetch }: any) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                    <>
                        <Table caption="All opportunities">
                            {data.listOpportunitys.items.map(
                                (opportunity: any, i: any) => (
                                    <Table.Row key={i}>
                                        <Table.Cell>
                                            {opportunity.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {opportunity.description}
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            )}
                        </Table>
                        <button onClick={() => refetch()}>Refetch!</button>
                    </>
                );
            }}
        </Query>
    </div>
);

export default AllOpportunities;
