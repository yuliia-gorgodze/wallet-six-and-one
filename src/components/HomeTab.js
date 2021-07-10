import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import transactionOperations from '../redux/transactions/transactionOperations';
import transactionSelectors from '../redux/transactions/transactionSelectors';

export default function HomeTab() {
  const dispatch = useDispatch();
  const result = useSelector(transactionSelectors.getAllTransactions);

  useEffect(() => {
    dispatch(transactionOperations.fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <TableContainer>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '20%' }} align="center">
                Дата
              </TableCell>
              <TableCell align="center">Тип</TableCell>
              <TableCell align="center">Категория</TableCell>
              <TableCell align="center">Комментарий</TableCell>
              <TableCell align="center">Сумма</TableCell>
              <TableCell align="center">Баланс</TableCell>
            </TableRow>
          </TableHead>
          <>
            <TableBody>
              {result.map(el => {
                return (
                  <TableRow>
                    <TableCell style={{ fontSize: 14 }} align="center">
                      {el.date}
                    </TableCell>
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
