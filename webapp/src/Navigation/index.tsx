import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TableChartIcon from '@material-ui/icons/TableChart';


const styles = {
  root: {
    width: 500,
    color: '#f04e30',
    '&$selected': {
      color: '#f04e30',
    },
  },
  selected: {},
};

const Navigation: React.FC = () => {
  const [value, setValue] = React.useState(null);

  return (
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      console.log(newValue);
      setValue(newValue);
    }}
    showLabels
  >
    <BottomNavigationAction label="Recents" icon={<ShowChartIcon/>} />
    <BottomNavigationAction label="Favorites" icon={<TableChartIcon/>} />
    <BottomNavigationAction label="Nearby" icon={<CloudUploadIcon/>} />
  </BottomNavigation>
  );
};

export default Navigation;
