import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import style from './componentsCSS/Table.module.css';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function createData(category, sum) {
  return { category, sum };
}

const rows = [
  createData('Продукты', 159),
  createData('Такси', 2134),
  createData('Продукты', 262),
  createData('Такси', 305),
  createData('Такси', 356),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <Paper className={`${classes.root} ${style.table__container}`}>
      <TableContainer component={Paper}>
        <Table
          className={`${classes.table} ${style.table}`}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow className={style.table__header}>
              <TableCell>Категория</TableCell>
              <TableCell align="right">Сумма</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={style.table__body} id="table__body">
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell align="right">{row.sum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
