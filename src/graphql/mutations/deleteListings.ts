import { gql } from '@apollo/client';

export const deleteListingMutation = gql`
  mutation deleteListing($id: UUID, $ids: [UUID!]) {
    deleteListing(id: $id, ids: $ids)
  }
`;
