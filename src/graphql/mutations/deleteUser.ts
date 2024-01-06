import { gql } from '@apollo/client';

export const deleteUserMutation = gql`
  mutation deleteUser($id: String, $ids: [String!]) {
    deleteUser(id: $id, ids: $ids)
  }
`;
