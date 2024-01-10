import { gql } from '@apollo/client';

export const quickListingEditFragment = gql`
  fragment QuickListingEdit on QuickListingEdit {
    id
    price
    isPublished
    quantity
    title
    serialNumber
    partNumber
    unit
    msrp
    acceptsOffers
  }
`;
