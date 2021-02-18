import { StockData } from './';

export interface TimespanString {
  start: string;
  end: string;
}

export interface LongestBullishVars {
  timespan?: TimespanString
}

export interface DailyDataVars {
  timespan?: TimespanString
  sortByVolume?: boolean;
  sortBySMA?: boolean;
}

export interface DailyData extends Omit<StockData, 'date'>{
  date: string;
}

export interface LongestBullishGraphql {
  length: number;
  timespan: TimespanString;
  stockData: DailyData[];
}

export interface LongestBullishRes {
  longestBullish: LongestBullishGraphql;
}

export interface DailyDataRes {
  dailyData: DailyData[];
}
