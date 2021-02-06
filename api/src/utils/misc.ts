import { StockData, LongestBullish } from '../types';

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
  arr = arr.reverse();
  const closingPrices = arr.map(elem => elem.close);

  let length = 0;
  let end = 0;
  let tmp = 0;

  for (let i = 1; i < closingPrices.length; i++) {
    if (closingPrices[i] > closingPrices[i - 1]) {
      tmp++;
    } else {
      if (tmp > length) {
        length = tmp;
        end = i;
      }
      tmp = 0;
    }
  }

  const longest: StockData[] = arr.slice(end - length, end);

  return {
    length: longest.length,
    timespan: {
      start: longest[0].date.toISOString(),
      end: longest[longest.length - 1].date.toISOString()
    },
    stockData: longest.reverse()
  };
};
