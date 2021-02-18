import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Stock } from '@ant-design/charts';

import TimespanPicker from '../TimespanPicker';
import Sad from '../Sad';
import { StoreContext } from '../../store';
import { StockData } from '../../types';

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

  const data: StockData[] = React.useMemo(() => (
    state.stockData.filter(elem => (
      state.startDate <= elem.date && elem.date < state.endDate
    )
    )
  ), [ state ]
  );


  type yField = [
    string,
    string,
    string,
    string
  ];

  interface Config {
    data: StockData[];
    xField: string;
    yField: yField;
    style: React.CSSProperties;
    tooltip: {
      showCrosshairs: boolean;
    },
    animate: boolean
  }

  const config: Config = {
    data: data,
    xField: 'date',
    yField: [ 'open', 'close', 'high', 'low' ],
    style: {
      width: '100%',
      height: '100%',
      padding: 5
    },
    tooltip: {
      showCrosshairs: false
    },
    animate: false
  };

  return (
    <Container component='main' maxWidth='lg' className={classes.root}>
      <Paper className={classes.paper}>
        <TimespanPicker/>
        {state.stockData.length !== 0 ?
          <Stock {...config} label={{ style: { fill: 'white' } }}/>
          : <Sad/>
        }
      </Paper>
    </Container>
  );
};

export default Chart;
