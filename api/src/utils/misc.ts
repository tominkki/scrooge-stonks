import { StockData, LongestBullish } from "../types";

export const inRange = (date: Date, start: Date, end: Date): boolean => (
  start.getTime() <= date.getTime() && date.getTime() <= end.getTime()
);

export const arrayAverage = (arr: Array<number>): number => (
  arr.reduce((acc: number, curr: number) => acc + curr, 0) / arr.length
);

export const byVolume = (a: StockData, b: StockData): number => {
  if (a.volume > b.volume) {
    return -1;
  } else if (a.volume < b.volume) {
    return 1;
  } else {
    return Math.abs(b.open - b.close) - Math.abs(a.open - a.close);
  }
};

export const findLongestBullish = (arr: StockData[]): LongestBullish => {

};
