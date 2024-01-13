import { gql } from '@apollo/client';

export const deleteListingReviewMutation = gql`
  mutation deleteListingReview($listingId: UUID!) {
    deleteListingReview(listingId: $listingId)
  }
`;
