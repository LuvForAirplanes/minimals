import { gql } from '@apollo/client';

export const listingStatisticsQuery = gql`
  query listingStatistics {
    listingStatistics {
      all
      published
      draft
    }
  }
`;
