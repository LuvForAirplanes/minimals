import { gql } from '@apollo/client';

import { listingReviewEditFragment } from '../fragments/listingReviewEdit';

export const myListingReviewQuery = gql`
  query myListingReview($listingId: UUID!) {
    myListingReview(listingId: $listingId) {
      ...ListingReviewEdit
    }
  }
  ${listingReviewEditFragment}
`;
