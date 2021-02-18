import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import { StoreContext } from '../../store';
import { StockData } from '../../types';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    flexGrow: 1
  },
  table: {
    padding: theme.spacing(3),
    width: '100%'
  }
}));

const StockTable: React.FC = () => {
  const classes = useStyles();

  const [ state ] = React.useContext(StoreContext);
  const [ page, setPage ] = React.useState<number>(0);
  const [ rows, setRows ] = React.useState<number>(15);

  const data: StockData[] = React.useMemo(() => (
    state.stockData.filter(elem => (
      state.startDate <= elem.date && elem.date < state.endDate
    )
    )
  ), [ state ]);

  React.useEffect(() => {
    setPage(0);
  }, [ data ]);

  const handlePageChange = (_e: unknown, page: number) => {
    setPage(page);
  };

  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRows(+e.target.value);
    setPage(0);
  };

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size='small'>
          <TableHead>
            <TableRow key='thead'>
              <TableCell>Date (MM/DD/YYYY)</TableCell>
              <TableCell align='right'>Trading volume</TableCell>
              <TableCell align='right'>Closing price ($)</TableCell>
              <TableCell align='right'>Opening price ($)</TableCell>
              <TableCell align='right'>High ($)</TableCell>
              <TableCell align='right'>Low ($)</TableCell>
              <TableCell align='right'>SMA5 (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rows, page * rows + rows).map(row => (
              <TableRow key={row.date.toISOString()}>
                <TableCell>
                  {row.date.getUTCMonth() + 1}/{row.date.getUTCDate()}/{row.date.getUTCFullYear()}
                </TableCell>
                <TableCell align='right'>{row.volume}</TableCell>
                <TableCell align='right'>{row.close.toFixed(2)}</TableCell>
                <TableCell align='right'>{row.open.toFixed(2)}</TableCell>
                <TableCell align='right'>{row.high.toFixed(2)}</TableCell>
                <TableCell align='right'>{row.low.toFixed(2)}</TableCell>
                <TableCell align='right'>{row.SMA.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[ 10, 15, 25, 50 ]}
        component="div"
        count={data.length}
        rowsPerPage={rows}
        page={page}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowChange}
      />
    </div>
  );
};

export default StockTable;
