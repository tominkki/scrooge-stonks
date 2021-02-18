import { gql } from '@apollo/client';

export const GET_STOCKDATA = gql`
  query (
    $timespan: TimespanInput
    $sortByVolume: Boolean
    $sortBySMA: Boolean
    ) {
    dailyData(
      timespan: $timespan
      sortByVolume: $sortByVolume
      sortBySMA: $sortBySMA
    ) {
      date
      close
      volume
      open
      high
      low
      SMA
    }
  }
`;

export const GET_LONGESTBULLISH = gql`
  query (
    $timespan: TimespanInput
    ) {
    longestBullish (
      timespan: $timespan
    ){
      length
      timespan {
        start
        end
      }
      stockData {
        date
        close
        volume
        open
        high
        low
      }
    }
  }
`;
