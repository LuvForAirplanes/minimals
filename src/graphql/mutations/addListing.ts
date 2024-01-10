import { gql } from '@apollo/client';

export const addListingMutation = gql`
  mutation addListing($listing: ListingAddEditInput!) {
    addListing(listing: $listing)
  }
`;
