import stockService from "../../services/stock-service";
import { StockData, getDataArgs, Timespan, LongestBullish } from "../../types";
import { byVolume } from "../../utils";

interface dailyDataArgs {
  timespan?: Timespan;
  sortByVolume?: boolean;
  sortBySMA?: boolean;
}

export const dailyData = (_: void, args: dailyDataArgs): StockData[] => {
  let filter: getDataArgs = null;
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
}

export const longestBullish = (_: void, args: Timespan): LongestBullish => {

}
