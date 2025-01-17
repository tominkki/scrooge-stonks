export interface StockData {
  date: Date;
  close: number;
  volume: number;
  open: number;
  high: number;
  low: number;
  SMA: number;
}

export interface Timespan {
  start: Date;
  end: Date;
}

export interface LongestBullish {
  length: number;
  timespan: Timespan;
  stockData: StockData[]
}
