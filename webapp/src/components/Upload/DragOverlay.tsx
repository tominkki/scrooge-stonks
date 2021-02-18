import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    backgroundColor: theme.palette.action.hover,
    width: '100%',
    height: '100%'
  }
}));

const DragOverlay: React.FC = () => {

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} elevation={6}/>
    </div>
  );
};

export default DragOverlay;
