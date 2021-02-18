import { LongestBullish, StockData, View } from '../types';
import { State, Action } from './types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
  case 'SET_DATA': {
    return {
      ...state,
      ...action.payload
    };
  }
  case 'SET_STOCKDATA': {
    return {
      ...state,
      stockData: action.payload
    };
  }
  case 'SET_LONGESTBULLISH': {
    return {
      ...state,
      longestBullish: action.payload
    };
  }
  case 'SET_START': {
    return {
      ...state,
      startDate: action.payload
    };
  }
  case 'SET_END': {
    return {
      ...state,
      endDate: action.payload
    };
  }
  case 'SET_VIEW': {
    return {
      ...state,
      view: action.payload
    };
  }
  default: {
    return state;
  }
  }
};

export const setData = (payload: State): Action => ({
  type: 'SET_DATA',
  payload
});

export const setStockData = (payload: StockData[]): Action => ({
  type: 'SET_STOCKDATA',
  payload
});

export const setLongestBullish = (payload: LongestBullish): Action => ({
  type: 'SET_LONGESTBULLISH',
  payload
});

export const setStartDate = (payload: Date): Action => ({
  type: 'SET_START',
  payload
});

export const setEndDate = (payload: Date): Action => ({
  type: 'SET_END',
  payload
});

export const setView = (payload: View): Action => ({
  type: 'SET_VIEW',
  payload
});
