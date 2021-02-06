import stockService from '../../services/stock-service';
import { StockData, GetDataArgs, Timespan, LongestBullish } from '../../types';
import { byVolume, findLongestBullish } from '../../utils';

interface DailyDataArgs {
  timespan?: Timespan;
  sortByVolume?: boolean;
  sortBySMA?: boolean;
}

export const dailyData = (_: void, args: DailyDataArgs): StockData[] => {
  let filter: GetDataArgs = null;
  const { sortByVolume, sortBySMA } = args;

  if (args.timespan) {
    const { start, end } = args.timespan;
    filter = { start: new Date(start), end: new Date(end) };
  }

  if (sortByVolume) {
    return stockService.getData(filter).sort((a, b) => byVolume(a, b));
  }

  if (sortBySMA) {
    return stockService.getData(filter).sort((a, b) => b.SMA - a.SMA);
  }

  return stockService.getData(filter);
};

interface LongestBullishArgs {
  timespan: Timespan;
}

export const longestBullish = (_: void, args: LongestBullishArgs): LongestBullish => {
  let filter: GetDataArgs = null;

  if (args.timespan) {
    const { start, end } = args.timespan;

    const startDate = new Date(start);
    startDate.setDate(startDate.getDate() - 1);

    filter = { start: startDate, end: new Date(end) };
  }

  return findLongestBullish(stockService.getData(filter));
};
