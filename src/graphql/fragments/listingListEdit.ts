import { gql } from '@apollo/client';

export const listingListEditFragment = gql`
  fragment ListingListEdit on ListingListEdit {
    id
    price
    isPublished
    quantity
  }
`;
