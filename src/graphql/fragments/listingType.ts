import { gql } from '@apollo/client';

export const listingTypeFragment = gql`
  fragment ListingType on ListingType {
    id
    name
  }
`;
