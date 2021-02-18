import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DescriptionIcon from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dropzone from './Dropzone';
import stockService from '../../services/stock-service';
import { StoreContext, setStockData, setView } from '../../store';
import { DailyData } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(5)
  },
  upload: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  icon: {
    'font-size': '125px ! important'
  },
  input: {
    display: 'none'
  }
}));

const Upload: React.FC = () => {

  const [ , dispatch ] = React.useContext(StoreContext);

  const classes = useStyles();

  const uploadFile = async (files: FileList | null): Promise<void> => {
    if (!files || 1 < files.length || files[0].type !== 'text/csv') {
      console.error('Invalid file');
      return;
    }

    const file: File = files[0];

    try {
      const res = await stockService.upload(file);
      const data = res.map((elem: DailyData) => ({
        ...elem,
        date: new Date(elem.date)
      }));
      dispatch(setStockData(data));
      dispatch(setView('chart'));
    } catch ({ message }) {
      console.error(message);
    }
  };

  return (
    <Container component='main' maxWidth='lg' className={classes.root}>
      <Dropzone fileDropped={uploadFile}>
        <Paper className={classes.upload}>
          <input
            type='file'
            accept='.csv'
            id='file-input'
            className={classes.input}
            onChange={e => uploadFile(e.target.files)}
          />
          <div>
            <DescriptionIcon className={classes.icon}/>
          </div>
          <label htmlFor='file-input'>
            <Button variant='contained' color='secondary' component='span'>
              Upload CSV file
            </Button>
          </label>
          <Typography variant='h6'>or drop it here</Typography>
        </Paper>
      </Dropzone>
    </Container>
  );
};

export default Upload;
