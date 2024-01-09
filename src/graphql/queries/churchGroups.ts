import { gql } from '@apollo/client';

export const churchGroupsQuery = gql`
  query churchGroups {
    churchGroups {
      id
      name
    }
  }
`;
