import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  title: {
    flexGrow: 1
  }
});


const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Scrooge stonks
          </Typography>
          <Tooltip title='GitHub' arrow>
            <IconButton color='inherit' aria-label='github' href='https://github.com/tominkki/scrooge-stonks'>
              <GitHubIcon/>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
