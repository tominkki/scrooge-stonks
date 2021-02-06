import { gql } from 'apollo-server-express';

export default gql`
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

  input TimespanInput {
    start: String!
    end: String!
  }

  type Query {
    longestBullish(timespan: TimespanInput): LongestBullish!
    dailyData(
      timespan: TimespanInput,
      sortByVolume: Boolean,
      sortBySMA: Boolean
    ): [DailyData!]!
  }
`;
