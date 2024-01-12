import { gql } from '@apollo/client';

export const listingRatingFragment = gql`
  fragment ListingRating on ListingRating {
    count
    star
    value
  }
`;
