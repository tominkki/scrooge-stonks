import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='lg' className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h5'>
          Loading...
        </Typography>
      </Paper>
    </Container>
  );
};

export default Loader;
