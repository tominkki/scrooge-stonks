import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useApolloClient } from '@apollo/client';

import TimespanPicker from '../TimespanPicker';
import Sad from '../Sad';
import { StoreContext, setLongestBullish } from '../../store';
import { GET_LONGESTBULLISH } from '../../graphql';
import { LongestBullishRes, LongestBullishVars } from '../../types';
import { parseLongestBullishRes, formatDate } from '../../utils';

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
  },
  grid: {
    maxWidth: 450,
    padding: theme.spacing(5)
  }
}));

const LongestBullishSite: React.FC = () => {

  const [ state, dispatch ] = React.useContext(StoreContext);
  const client = useApolloClient();

  const classes = useStyles();

  React.useEffect(() => {
    void (async () => {
      try {
        const { data } = await client.query<LongestBullishRes, LongestBullishVars>({
          query: GET_LONGESTBULLISH,
          variables: {
            timespan: {
              start: state.startDate.toISOString(),
              end: state.endDate.toISOString()
            }
          }
        });

        const longestBullish = parseLongestBullishRes(data);

        dispatch(setLongestBullish(longestBullish));
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, [ state.startDate, state.endDate ]);

  return (
    <Container component='main' maxWidth='lg' className={classes.root}>
      <Paper className={classes.paper}>
        <TimespanPicker/>
        {state.longestBullish ?
          <div className={classes.paper}>
            <Typography variant='h4' align='center'>
              Longest Bullish Trend
            </Typography>
            <Grid container zeroMinWidth className={classes.grid} spacing={0}>
              <Grid item xs={6} wrap='wrap'>
                <Typography variant='subtitle1'>
                  Length:
                </Typography>
                <Divider/>
                <Typography variant='subtitle1'>
                  Start date:
                </Typography>
                <Typography variant='subtitle1'>
                  Closing price:
                </Typography>
                <Divider/>
                <Typography variant='subtitle1'>
                  End date:
                </Typography>
                <Typography variant='subtitle1'>
                  Closing price:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='subtitle1' align='right'>
                  {state.longestBullish.length}
                </Typography>
                <Divider/>
                <Typography variant='subtitle1' align='right'>
                  {formatDate(state.longestBullish.timespan.start)}
                </Typography>
                <Typography variant='subtitle1' align='right'>
                  ${state.longestBullish.stockData.slice(-1)[0].close}
                </Typography>
                <Divider/>
                <Typography variant='subtitle1' align='right'>
                  {formatDate(state.longestBullish.timespan.end)}
                </Typography>
                <Typography variant='subtitle1' align='right'>
                  ${state.longestBullish.stockData[0].close}
                </Typography>
              </Grid>
            </Grid>
          </div>
          : <Sad/>
        }
      </Paper>
    </Container>
  );
};

export default LongestBullishSite;
