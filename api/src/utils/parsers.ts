import { isArray, isDate, isNumber } from './type-guards';
import { StockData } from '../types';
import { arrayAverage } from './misc';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const parseNumber = (param: any): number => {
  if (!param || !isNumber(param)) {
    throw new Error('Invalid data');
  }

  return param.valueOf();
};

export const parseDate = (param: any): Date => {
  if (!param || !isDate(param)) {
    throw new Error('Invalid data');
  }

  return new Date(`${param}Z`);
};

export const parseDailyData = (param: any): StockData => {
  const data: StockData = {
    date: parseDate(param.date),
    close: parseNumber(param.close),
    volume: parseNumber(param.volume),
    open: parseNumber(param.open),
    high: parseNumber(param.high),
    low: parseNumber(param.low),
    SMA: 0
  };

  return data;
};

export const parseData = (param: any): StockData[] => {
  if (!param || !isArray(param)) {
    throw new Error('Invalid data');
  }

  const tmp: Array<number> = [];

  const data: StockData[] = param.reverse().map((obj: any) => {
    const parsed = parseDailyData(obj);
    const SMA = !isNaN(arrayAverage(tmp)) ?
      (parsed.open / arrayAverage(tmp) - 1) * 100
      : 0;

    tmp.unshift(parsed.open);
    if (tmp.length > 5) {
      tmp.pop();
    }

    return { ...parsed, SMA };
  });

  return data.reverse();
};
