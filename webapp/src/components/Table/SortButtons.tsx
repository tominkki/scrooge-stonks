import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useApolloClient } from '@apollo/client';

import { StoreContext, setStockData } from '../../store';
import { GET_STOCKDATA } from '../../graphql';
import { DailyDataRes, DailyDataVars } from '../../types';
import { parseStockDataRes } from '../../utils';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const SortButtons: React.FC = () => {

  const classes = useStyles();

  const [ , dispatch ] = React.useContext(StoreContext);
  const client = useApolloClient();

  const sortDate = async () => {
    try {
      const { data } = await client.query<DailyDataRes, DailyDataVars>({
        query: GET_STOCKDATA
      });

      const stockData = parseStockDataRes(data);
      dispatch(setStockData(stockData));
    } catch ({ message }) {
      console.error(message);
    }
  };

  const sortVolume = async () => {
    try {
      const { data } = await client.query<DailyDataRes, DailyDataVars>({
        query: GET_STOCKDATA,
        variables: {
          sortByVolume: true
        }
      });

      const stockData = parseStockDataRes(data);
      dispatch(setStockData(stockData));
    } catch ({ message }) {
      console.error(message);
    }
  };

  const sortSma = async () => {
    try {
      const { data } = await client.query<DailyDataRes, DailyDataVars>({
        query: GET_STOCKDATA,
        variables: {
          sortBySMA: true
        }
      });

      const stockData = parseStockDataRes(data);
      dispatch(setStockData(stockData));
    } catch ({ message }) {
      console.error(message);
    }
  };

  return (
    <Grid container justify='space-evenly' className={classes.root}>
      <Button variant='contained' color='secondary' onClick={sortDate}>
        sort by date
      </Button>
      <Button variant='contained' color='secondary' onClick={sortVolume}>
        sort by volume
      </Button>
      <Button variant='contained' color='secondary' onClick={sortSma}>
        sort by sma5
      </Button>
    </Grid>
  );
};

export default SortButtons;
