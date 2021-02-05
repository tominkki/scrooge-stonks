import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Timespan {
    start: String!
    end: String!
  }

  type LongestBullish {
    length: Int!
    timespan: Timespan!
    stockData: [DailyData!]!
  }

  type DailyData {
    date: String!
    close: Float!
    volume: Int!
    open: Float!
    high: Float!
    low: Float!
    SMA: Float!
  }

  type Query {
    longestBullish(timespan: Timespan): LongestBullish!
    dailyData(
      timespan: Timespan,
      sortByVolume: Boolean,
      sortBySMA: Boolean
    ): [DailyData!]!
  }
`;
