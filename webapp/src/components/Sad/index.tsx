import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sad: {
    'font-size': '125px ! important'
  }
});
const Sad: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <SentimentVeryDissatisfiedIcon className={classes.sad}/>
      </div>
      <div>
        <Typography variant='h6'>
          No data...
        </Typography>
      </div>
    </div>
  );
};

export default Sad;
