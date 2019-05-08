/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateOpportunityInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  opportunityTypeId?: string | null,
};

export type UpdateOpportunityInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  opportunityTypeId?: string | null,
};

export type DeleteOpportunityInput = {
  id?: string | null,
};

export type CreateFunderInput = {
  id?: string | null,
  name: string,
  funderOpportunitiesId?: string | null,
};

export type UpdateFunderInput = {
  id: string,
  name?: string | null,
  funderOpportunitiesId?: string | null,
};

export type DeleteFunderInput = {
  id?: string | null,
};

export type CreateTeamMemberInput = {
  id?: string | null,
  name: string,
  role?: string | null,
  teamMemberOpportunityId?: string | null,
};

export type UpdateTeamMemberInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  teamMemberOpportunityId?: string | null,
};

export type DeleteTeamMemberInput = {
  id?: string | null,
};

export type CreateOpportunityTypeInput = {
  id?: string | null,
  name: string,
  description: string,
  opportunityTypeOpportunitiesId?: string | null,
};

export type UpdateOpportunityTypeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  opportunityTypeOpportunitiesId?: string | null,
};

export type DeleteOpportunityTypeInput = {
  id?: string | null,
};

export type ModelOpportunityFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelOpportunityFilterInput | null > | null,
  or?: Array< ModelOpportunityFilterInput | null > | null,
  not?: ModelOpportunityFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFunderFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelFunderFilterInput | null > | null,
  or?: Array< ModelFunderFilterInput | null > | null,
  not?: ModelFunderFilterInput | null,
};

export type ModelTeamMemberFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  role?: ModelStringFilterInput | null,
  and?: Array< ModelTeamMemberFilterInput | null > | null,
  or?: Array< ModelTeamMemberFilterInput | null > | null,
  not?: ModelTeamMemberFilterInput | null,
};

export type ModelOpportunityTypeFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelOpportunityTypeFilterInput | null > | null,
  or?: Array< ModelOpportunityTypeFilterInput | null > | null,
  not?: ModelOpportunityTypeFilterInput | null,
};

export type CreateOpportunityMutationVariables = {
  input: CreateOpportunityInput,
};

export type CreateOpportunityMutation = {
  createOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateOpportunityMutationVariables = {
  input: UpdateOpportunityInput,
};

export type UpdateOpportunityMutation = {
  updateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteOpportunityMutationVariables = {
  input: DeleteOpportunityInput,
};

export type DeleteOpportunityMutation = {
  deleteOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateFunderMutationVariables = {
  input: CreateFunderInput,
};

export type CreateFunderMutation = {
  createFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateFunderMutationVariables = {
  input: UpdateFunderInput,
};

export type UpdateFunderMutation = {
  updateFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteFunderMutationVariables = {
  input: DeleteFunderInput,
};

export type DeleteFunderMutation = {
  deleteFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type CreateTeamMemberMutationVariables = {
  input: CreateTeamMemberInput,
};

export type CreateTeamMemberMutation = {
  createTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateTeamMemberMutationVariables = {
  input: UpdateTeamMemberInput,
};

export type UpdateTeamMemberMutation = {
  updateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteTeamMemberMutationVariables = {
  input: DeleteTeamMemberInput,
};

export type DeleteTeamMemberMutation = {
  deleteTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type CreateOpportunityTypeMutationVariables = {
  input: CreateOpportunityTypeInput,
};

export type CreateOpportunityTypeMutation = {
  createOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type UpdateOpportunityTypeMutationVariables = {
  input: UpdateOpportunityTypeInput,
};

export type UpdateOpportunityTypeMutation = {
  updateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type DeleteOpportunityTypeMutationVariables = {
  input: DeleteOpportunityTypeInput,
};

export type DeleteOpportunityTypeMutation = {
  deleteOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type GetOpportunityQueryVariables = {
  id: string,
};

export type GetOpportunityQuery = {
  getOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListOpportunitysQueryVariables = {
  filter?: ModelOpportunityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunitysQuery = {
  listOpportunitys:  {
    __typename: "ModelOpportunityConnection",
    items:  Array< {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFunderQueryVariables = {
  id: string,
};

export type GetFunderQuery = {
  getFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type ListFundersQueryVariables = {
  filter?: ModelFunderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundersQuery = {
  listFunders:  {
    __typename: "ModelFunderConnection",
    items:  Array< {
      __typename: "Funder",
      id: string,
      name: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTeamMemberQueryVariables = {
  id: string,
};

export type GetTeamMemberQuery = {
  getTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type ListTeamMembersQueryVariables = {
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamMembersQuery = {
  listTeamMembers:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      name: string,
      role: string | null,
      opportunity:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetOpportunityTypeQueryVariables = {
  id: string,
};

export type GetOpportunityTypeQuery = {
  getOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type ListOpportunityTypesQueryVariables = {
  filter?: ModelOpportunityTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOpportunityTypesQuery = {
  listOpportunityTypes:  {
    __typename: "ModelOpportunityTypeConnection",
    items:  Array< {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateOpportunitySubscription = {
  onCreateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateOpportunitySubscription = {
  onUpdateOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteOpportunitySubscription = {
  onDeleteOpportunity:  {
    __typename: "Opportunity",
    id: string,
    name: string,
    description: string | null,
    funders:  {
      __typename: "ModelFunderConnection",
      items:  Array< {
        __typename: "Funder",
        id: string,
        name: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    teammembers:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        name: string,
        role: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    type:  {
      __typename: "OpportunityType",
      id: string,
      name: string,
      description: string,
      opportunities:  {
        __typename: "Opportunity",
        id: string,
        name: string,
        description: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateFunderSubscription = {
  onCreateFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateFunderSubscription = {
  onUpdateFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteFunderSubscription = {
  onDeleteFunder:  {
    __typename: "Funder",
    id: string,
    name: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnCreateTeamMemberSubscription = {
  onCreateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTeamMemberSubscription = {
  onUpdateTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTeamMemberSubscription = {
  onDeleteTeamMember:  {
    __typename: "TeamMember",
    id: string,
    name: string,
    role: string | null,
    opportunity:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnCreateOpportunityTypeSubscription = {
  onCreateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateOpportunityTypeSubscription = {
  onUpdateOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteOpportunityTypeSubscription = {
  onDeleteOpportunityType:  {
    __typename: "OpportunityType",
    id: string,
    name: string,
    description: string,
    opportunities:  {
      __typename: "Opportunity",
      id: string,
      name: string,
      description: string | null,
      funders:  {
        __typename: "ModelFunderConnection",
        nextToken: string | null,
      } | null,
      teammembers:  {
        __typename: "ModelTeamMemberConnection",
        nextToken: string | null,
      } | null,
      type:  {
        __typename: "OpportunityType",
        id: string,
        name: string,
        description: string,
      } | null,
    } | null,
  } | null,
};
