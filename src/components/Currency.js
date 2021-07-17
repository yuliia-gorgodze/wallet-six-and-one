import React, { useEffect, useState } from 'react';
import { fetchInfo } from '../helpers/exchangeApiService';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import addStyles from '../components/componentsCSS/SideBar.module.css';
import Loader from 'react-loader-spinner';
import bgImg from '../assets/images/currency-bg.png';

const useStyles = makeStyles({
  table: {
    minWidth: 280,
    maxWidth: 380,
    maxHeight: 180,
    borderRadius: 20,
  },

  head: {
    background: 'rgb(110, 120, 232)',
    borderBottom: 'none',
  },

  headers: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 10,
    color: 'white',
    borderBottom: 'none',
  },

  body: {
    backgroundColor: 'rgb(74, 85, 226)',
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'bottom 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  currency: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: 'none',
  },

  buy: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'white',
    borderBottom: 'none',
  },

  sale: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 16,
    color: 'white',
    borderBottom: 'none',
  },
});

function CurrencyExchange() {
  const styles = useStyles();
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchInfo();
        setCurrency(data.slice(0, -1));
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className={addStyles.currencyContainer}>
        <TableContainer className={styles.table}>
          {currency.length > 0 ? (
            <Table size="small" aria-label="a dense table">
              <TableHead className={styles.head}>
                <TableRow>
                  <TableCell className={styles.headers}>Валюта</TableCell>
                  <TableCell align="center" className={styles.headers}>
                    Покупка
                  </TableCell>
                  <TableCell align="center" className={styles.headers}>
                    Продажа
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody className={styles.body}>
                {currency.map(el => (
                  <TableRow key={el.ccy}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      className={styles.currency}
                    >
                      {el.ccy}
                    </TableCell>
                    <TableCell align="center" className={styles.buy}>
                      {Math.floor(el.buy * 100) / 100}
                    </TableCell>
                    <TableCell align="center" className={styles.sale}>
                      {Math.floor(el.sale * 100) / 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
        </TableContainer>
      </div>
    </>
  );
}

export default CurrencyExchange;
