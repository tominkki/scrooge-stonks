import React from 'react';

import { State, Action } from './types';

const initial: State = {
  startDate: new Date('2020-01-01T00:00:00Z'),
  endDate: new Date(),
  stockData: [],
  longestBullish: null,
  view: 'upload'
};

export const StoreContext = React.createContext<[State, React.Dispatch<Action>]>([
  initial,
  () => initial
]);

interface StoreProviderProps {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ reducer, children }) => {
  const [ state, dispatch ] = React.useReducer(reducer, initial);

  return (
    <StoreContext.Provider value={[ state, dispatch ]}>
      {children}
    </StoreContext.Provider>
  );
};
