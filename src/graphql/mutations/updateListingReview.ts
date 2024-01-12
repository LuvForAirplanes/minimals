import { gql } from '@apollo/client';

import { listingReviewEditFragment } from '../fragments/listingReviewEdit';

export const updateListingReviewMutation = gql`
  mutation updateListingReview($review: ListingReviewEditInput!) {
    updateListingReview(review: $review) {
      ...ListingReviewEdit
    }
  }
  ${listingReviewEditFragment}
`;
