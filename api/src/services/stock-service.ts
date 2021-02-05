import data from '../data/stock-data.json';
import { StockData, getDataArgs } from '../types';
import { parseData, inRange } from '../utils';

const getData = (args: getDataArgs = null): StockData[] => {
  if (!args) {
    return parseData(data);
  } else {
    return parseData(data).filter(elem => inRange(elem.date, args.start, args.end))
  }
};

export default { getData };
