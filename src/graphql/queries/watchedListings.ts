import { gql } from '@apollo/client';

export const watchedListingsQuery = gql`
  query watchedListings {
    watchedListings(order: { date: DESC }) {
      date
      listing {
        id
        title
      }
    }
  }
`;
