import { StockData, GetDataArgs } from '../types';
import { inRange } from '../utils';
import cache from './cache';

const getData = (args: GetDataArgs = null): StockData[] => {
  const data: StockData[] | undefined = cache.get('STOCK-DATA');

  if (!data) {
    throw new Error('No data');
  } else if (!args) {
    return data;
  } else {
    return data.filter(elem => inRange(elem.date, args.start, args.end));
  }
};

export default { getData };
