import { gql } from '@apollo/client';

export const userStatisticsQuery = gql`
  query userStatistics {
    userStatistics {
      all
      approved
      pending
      rejected
    }
  }
`;
