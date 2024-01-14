import { gql } from '@apollo/client';

export const listingLoadedMutation = gql`
  mutation listingLoaded($listingId: UUID!) {
    listingLoaded(listingId: $listingId)
  }
`;
