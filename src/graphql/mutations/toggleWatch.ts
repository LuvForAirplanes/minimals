import { gql } from '@apollo/client';

export const toggleWatchMutation = gql`
  mutation toggleWatch($listingId: UUID!) {
    toggleWatch(listingId: $listingId)
  }
`;
