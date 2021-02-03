import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type LongestBullish {
    length: Int!
    startDate: String!
    endDate: String!
    stockData: [DailyData]
  }

  type DailyData {
    date: String!
    close: Float!
    volume: Int!
    open: Float!
    high: Float!
    low: Float!
    SMA: Float
  }
`;
