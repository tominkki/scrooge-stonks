import { isArray, isDate, isNumber } from './type-guards';
import { StockData } from '../types';

const parseNumber = (param: any): Number => {
  if (!param || !isNumber(param)) {
    throw new Error('Invalid data');
  }

  return param;
};

const parseDate = (param: any): Date => {
  if(!param || !isDate(param)) {
    throw new Error('Invalid data');
  }

  return new Date(`${param}Z`);
}

const parseDailyData = (param: any): StockData => {
  const data: StockData = {
    date: parseDate(param.date),
    close: parseNumber(param.close),
    volume: parseNumber(param.volume),
    open: parseNumber(param.open),
    high: parseNumber(param.high),
    low: parseNumber(param.low)
  }

  return data;
}

export const parseData = (param: any): StockData[] => {
  if (!param || !isArray(param)) {
    throw new Error('Invalid data');
  }
  const data: StockData[] = param.map((obj: any) => parseDailyData(obj));

  return data;
}