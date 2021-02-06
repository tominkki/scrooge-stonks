import { StockData, LongestBullish } from '../types';

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
