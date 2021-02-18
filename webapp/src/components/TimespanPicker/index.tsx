import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import { StoreContext, setStartDate, setEndDate } from '../../store';

const TimespanPicker: React.FC = () => {

  const [ state, dispatch ] = React.useContext(StoreContext);

  const handleStartChange = (date: Date | null) => {
    if (date) {
      dispatch(setStartDate(date));
    }
  };

  const handleEndChange = (date: Date | null) => {
    if (date) {
      dispatch(setEndDate(date));
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-evenly'>
        <DatePicker
          disableToolbar
          variant='inline'
          format='MM/dd/yyyy'
          margin='normal'
          id='start-date-picker'
          label='Select start date'
          value={state.startDate}
          onChange={handleStartChange}
        />
        <DatePicker
          disableToolbar
          variant='inline'
          format='MM/dd/yyyy'
          margin='normal'
          id='end-date-picker'
          label='Select end date'
          value={state.endDate}
          onChange={handleEndChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default TimespanPicker;
