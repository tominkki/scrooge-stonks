import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import TimespanPicker from '../TimespanPicker';
import StockTable from './StockTable';
import SortButtons from './SortButtons';
import Sad from '../Sad';
import { StoreContext } from '../../store';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(5)
  },
  paper: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
}));

const Chart: React.FC = () => {

  const [ state ] = React.useContext(StoreContext);
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='lg' className={classes.root}>
      <Paper className={classes.paper}>
        <TimespanPicker/>
        {state.stockData.length !== 0 ?
          <div>
            <StockTable/>
            <SortButtons/>
          </div>
          : <Sad/>
        }
      </Paper>
    </Container>
  );
};

export default Chart;
