import { gql } from '@apollo/client';

export const listingEditFragment = gql`
  fragment ListingEdit on ListingEdit {
    id
    title
    content
    serialNumber
    partNumber
    quantity
    categoryId
    unit
    price
    msrp
    isPublished
    acceptsOffers
    categoryId
    content
    images {
      id
      order
      added
    }
  }
`;
