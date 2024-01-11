import { gql } from '@apollo/client';

export const ListingDetailsFragment = gql`
  fragment ListingDetails on Listing {
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
    content
    images {
      id
    }
    category {
      id
      name
    }
    reviews {
      id
      added
      updated
      user {
        userName
      }
    }
  }
`;
