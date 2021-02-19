import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useApolloClient } from '@apollo/client';

import { StoreContext, setStockData } from './store';
import { DailyDataRes } from './types';
import { parseStockDataRes } from './utils';
import { GET_STOCKDATA } from './graphql';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

const Upload = React.lazy(() => import('./components/Upload'));

const Chart = React.lazy(() => import('./components/Chart'));

const Table = React.lazy(() => import('./components/Table'));

const LongestBullishSite = React.lazy(() => import('./components/LongestBullishSite'));

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh'
  },
  content: {
    flexGrow: 1
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  const [ state, dispatch ] = React.useContext(StoreContext);
  const client = useApolloClient();

  React.useEffect(() => {
    void (async () => {
      try {
        const { data } = await client.query<DailyDataRes>({
          query: GET_STOCKDATA
        });

        const stockData = parseStockDataRes(data);
        dispatch(setStockData(stockData));
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, []);

  return (
    <div className={classes.root}>
      <Header/>
      <div className={classes.content}>
        <React.Suspense fallback={<Loader/>}>
          {state.view === 'chart' && <Chart/>}
          {state.view === 'table' && <Table/>}
          {state.view === 'bullish' && <LongestBullishSite/>}
          {state.view === 'upload' && <Upload/>}
        </React.Suspense>
      </div>
      <Navigation/>
    </div>
  );
};

export default App;
