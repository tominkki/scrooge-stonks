import data from '../data/stock-data.json';
import { StockData, GetDataArgs } from '../types';
import { parseData, inRange } from '../utils';

const getData = (args: GetDataArgs = null): StockData[] => {
  if (!args) {
    return parseData(data);
  } else {
    return parseData(data).filter(elem => inRange(elem.date, args.start, args.end));
  }
};

export default { getData };
