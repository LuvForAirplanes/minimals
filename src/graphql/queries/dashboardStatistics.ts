import { gql } from '@apollo/client';

export const dashboardStatisticsQuery = gql`
  query dashboardStatistics {
    dashboardStatistics {
      users
      listings
      listingLoads
    }
  }
`;
