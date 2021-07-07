import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './componentsCSS/Currency.module.css';

import { getCurrencies } from '../redux/exchange/exchangeSelectors';
import fetchExchange from '../redux/exchange/exchangeOperations';

function CurrencyExchange({ currencies }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchange());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <TableContainer>
        <Paper elevation={5} />
        <Table aria-label="currency table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Валюта</TableCell>
              <TableCell align="center">Покупка</TableCell>
              <TableCell align="center">Продажа</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencies &&
              Object.keys(currencies).map(currency => (
                <TableRow key={currency}>
                  <TableCell component="th" scope="row" align="center">
                    {currency}
                  </TableCell>
                  <TableCell align="center">
                    {currencies[currency].buy}
                  </TableCell>
                  <TableCell align="center">
                    {currencies[currency].sale}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = state => ({
  currencies: getCurrencies(state),
});

export default connect(mapStateToProps)(CurrencyExchange);
