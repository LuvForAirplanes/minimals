import { gql } from '@apollo/client';

export const listingReviewEditFragment = gql`
  fragment ListingReviewEdit on ListingReviewEdit {
    id
    listingId
    title
    content
    rating
  }
`;
