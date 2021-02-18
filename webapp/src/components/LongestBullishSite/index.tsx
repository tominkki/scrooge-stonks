import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useApolloClient } from '@apollo/client';

import TimespanPicker from '../TimespanPicker';
import Sad from '../Sad';
import { StoreContext, setLongestBullish } from '../../store';
import { GET_LONGESTBULLISH } from '../../graphql';
import { LongestBullishRes, LongestBullishVars } from '../../types';
import { parseLongestBullishRes } from '../../utils';

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
            <Typography>
              what
            </Typography>
          </div>
          : <Sad/>
        }
      </Paper>
    </Container>
  );
};

export default LongestBullishSite;
