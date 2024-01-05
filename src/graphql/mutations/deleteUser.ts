import { gql } from '@apollo/client';

export const deleteUserMutation = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
