import { StockData, LongestBullish, View } from '../types';

export type State = {
  startDate: Date;
  endDate: Date
  stockData: StockData[];
  longestBullish: LongestBullish | null;
  view: View;
};

export type Action =
  | {
    type: 'SET_DATA';
    payload: Omit<State, 'startDate' | 'endDate'>;
  }
  | {
    type: 'SET_STOCKDATA';
    payload: StockData[];
  }
  | {
    type: 'SET_LONGESTBULLISH';
    payload: LongestBullish;
  }
  | {
    type: 'SET_START';
    payload: Date;
  }
  | {
    type: 'SET_END';
    payload: Date;
  }
  | {
    type: 'SET_VIEW';
    payload: View;
  };

