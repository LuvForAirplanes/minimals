import { gql } from '@apollo/client';

export const ListingReviewFragment = gql`
  fragment ListingReview on ListingReview {
    __typename
    id
    added
    content
    title
    rating
    title
    updated
    verified
    user {
      id
      userName
    }
  }
`;
