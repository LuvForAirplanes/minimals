import { gql } from '@apollo/client';

export const toggleListingPublicityMutation = gql`
  mutation toggleListingPublicity($id: UUID!) {
    toggleListingPublicity(id: $id)
  }
`;
