import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import CallMadeIcon from '@material-ui/icons/CallMade';

import { View } from '../../types';
import { StoreContext, setView } from '../../store';

const StyledNavItem = withStyles({
  root: {
    '&$selected': {
      color: '#f04e30'
    }
  },
  selected: {}
})(BottomNavigationAction);

const Navigation: React.FC = () => {

  const [ state, dispatch ] = React.useContext(StoreContext);

  const handleChange = (_e: React.ChangeEvent<unknown>, value: View) => {
    dispatch(setView(value));
  };

  return (
    <BottomNavigation
      value={state.view}
      onChange={handleChange}
      showLabels
    >
      <StyledNavItem value='chart' label='Chart' icon={<ShowChartIcon/>}/>
      <StyledNavItem value='table' label='Table' icon={<TableChartIcon/>}/>
      <StyledNavItem value='bullish' label='Longest Bullish' icon={<CallMadeIcon/>}/>
      <StyledNavItem value='upload' label='Upload' icon={<CloudUploadIcon/>}/>
    </BottomNavigation>
  );
};

export default Navigation;
