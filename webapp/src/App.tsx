import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Navigation from './Navigation';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh'
  }
});

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header/>
      <Navigation/>
    </div>
  )
} 

export default App;
