import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import style from './componentsCSS/Table.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import transactionOperations from '../redux/transactions/transactionOperations';
import transactionSelectors from '../redux/transactions/transactionSelectors';
import { getBalance } from '../redux/finance/finance-selectors';
export default function TableStatistic() {
  const dispatch = useDispatch();
  const result = useSelector(transactionSelectors.getAllTransactions);
  console.log(result, 'result');

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactions());
  }, [dispatch]);
  const amount = useSelector(getBalance);
  return (
    <div>
      <TableContainer className={style.tableContainer}>
        <Table aria-label="a dense table">
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableCell className={style.tableCell} align="left">
                Категория
              </TableCell>
              <TableCell className={style.tableCell} align="right">
                Сумма
              </TableCell>
            </TableRow>
          </TableHead>
          <>
            <TableBody>
              {result.transactions.map(el => {
                return (
                  <TableRow className={style.tableRow}>
                    <TableCell className={style.tableRowElement} align="left">
                      {el.category}
                    </TableCell>
                    <TableCell className={style.tableRowElement} align="right">
                      {el.amount}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </>
        </Table>
      </TableContainer>
      <ul className={style.balances}>
        <li>
          Расходы: <span className={style.balances__spending}>0</span>
        </li>
        <li>
          Доходы: <span className={style.balances__income}>{amount}$</span>
        </li>
      </ul>
    </div>
  );
}
