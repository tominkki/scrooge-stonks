import { DailyDataRes, LongestBullishRes, LongestBullish, StockData } from '../types';

export const parseStockDataRes = (data: DailyDataRes): StockData[] => (
  data.dailyData.map(elem => ({
    ...elem,
    date: new Date(elem.date)
  }))
);

export const parseLongestBullishRes = (data: LongestBullishRes): LongestBullish => ({
  ...data.longestBullish,
  timespan: {
    start: new Date(data.longestBullish.timespan.start),
    end: new Date(data.longestBullish.timespan.end)
  },
  stockData: data.longestBullish.stockData.map(elem => ({
    ...elem,
    date: new Date(elem.date)
  }))
});
