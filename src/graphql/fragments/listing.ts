import { gql } from '@apollo/client';

export const ListingFragment = gql`
  fragment Listing on Listing {
    __typename
    id
    title
    price
    mainImageId
    acceptsOffers
    quantity
    msrp
    partNumber
    isPublished
    added
    updated
    images {
      id
    }
    category {
      name
    }
  }
`;
