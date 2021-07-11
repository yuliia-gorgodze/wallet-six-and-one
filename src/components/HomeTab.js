import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import transactionOperations from '../redux/transactions/transactionOperations';
import transactionSelectors from '../redux/transactions/transactionSelectors';
import styles from './componentsCSS/HomeTab.module.css';

export default function HomeTab() {
  const dispatch = useDispatch();
  const result = useSelector(transactionSelectors.getAllTransactions);

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table aria-label="a dense table">
          <TableHead className={styles.tableHead}>
            <TableRow className={styles.tableRow}>
              <TableCell
                className={styles.tableCell}
                style={{ width: '20%' }}
                align="center"
              >
                Дата
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                Тип
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                Категория
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                Комментарий
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                Сумма
              </TableCell>
              <TableCell className={styles.tableCell} align="center">
                Баланс
              </TableCell>
            </TableRow>
          </TableHead>
          <>
            <TableBody>
              {result.map(el => {
                return (
                  <TableRow className={styles.tableRow}>
                    <TableCell align="center">{el.date}</TableCell>
                    <TableCell align="center">{el.type}</TableCell>
                    <TableCell align="center">{el.category}</TableCell>
                    <TableCell align="center">{el.comment}</TableCell>
                    <TableCell align="center">{el.sum}</TableCell>
                    <TableCell align="center">{el.balance}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </>
        </Table>
      </TableContainer>
    </>
  );
}
