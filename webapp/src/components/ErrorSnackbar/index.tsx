import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: 'red',
    color: theme.palette.text.primary
  }
}));

interface ErrorProps {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>
  message: string;
}

const ErrorSnackbar: React.FC<ErrorProps> = ({ error, setError, message }) => {

  const classes = useStyles();

  const handleClose = (e: React.SyntheticEvent | React.MouseEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <div>
      <Snackbar
        ContentProps={{
          className: classes.snackbar
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={error}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small'/>
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default ErrorSnackbar;
