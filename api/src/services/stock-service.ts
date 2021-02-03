import data from '../data/stock-data.json';
import { StockData } from '../types';
import { parseData, inRange } from '../utils';

const getData = (): StockData[] => parseData(data);

const getDataByTimespan = (start: Date, end: Date): StockData[] => (
  parseData(data).filter(elem => inRange(elem.date, start, end))
);

export default { getData, getDataByTimespan };
