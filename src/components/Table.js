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
let a = {
  Ё: 'YO',
  Й: 'I',
  Ц: 'TS',
  У: 'U',
  К: 'K',
  Е: 'E',
  Н: 'N',
  Г: 'G',
  Ш: 'SH',
  Щ: 'SCH',
  З: 'Z',
  Х: 'H',
  Ъ: "'",
  ё: 'yo',
  й: 'i',
  ц: 'ts',
  у: 'u',
  к: 'k',
  е: 'e',
  н: 'n',
  г: 'g',
  ш: 'sh',
  щ: 'sch',
  з: 'z',
  х: 'h',
  ъ: "'",
  Ф: 'F',
  Ы: 'I',
  В: 'V',
  А: 'a',
  П: 'P',
  Р: 'R',
  О: 'O',
  Л: 'L',
  Д: 'D',
  Ж: 'ZH',
  Э: 'E',
  ф: 'f',
  ы: 'i',
  в: 'v',
  а: 'a',
  п: 'p',
  р: 'r',
  о: 'o',
  л: 'l',
  д: 'd',
  ж: 'zh',
  э: 'e',
  Я: 'Ya',
  Ч: 'CH',
  С: 'S',
  М: 'M',
  И: 'I',
  Т: 'T',
  Ь: "'",
  Б: 'B',
  Ю: 'YU',
  я: 'ya',
  ч: 'ch',
  с: 's',
  м: 'm',
  и: 'i',
  т: 't',
  ь: "'",
  б: 'b',
  ю: 'yu',
  '.': ' ',
};
export default function TableStatistic({ color }) {
  const dispatch = useDispatch();
  const result = useSelector(transactionSelectors.getAllTransactions);
  useEffect(() => {
    dispatch(transactionOperations.fetchTransactions());
  }, [dispatch]);
  const amount = useSelector(getBalance);
  function transliterate(word) {
    return word
      .split('')
      .map(function (char) {
        if (char === '.') {
          return;
        }
        return a[char] || char;
      })
      .join('');
  }
  const colorBG = el => {
    let indexColor = Object.keys(color).indexOf(
      transliterate(el.category).toLowerCase(),
    );
    return Object.values(color)[indexColor];
  };
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
                  <TableRow className={style.tableRow} key={el.id}>
                    <TableCell className={style.tableRowElement} align="left">
                      {el.category}
                      <div
                        style={{ backgroundColor: colorBG(el) }}
                        className={style.colorCategory}
                      ></div>
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
