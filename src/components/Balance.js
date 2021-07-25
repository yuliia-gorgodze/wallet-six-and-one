import React from 'react';
import { useSelector } from 'react-redux';
import transactionSelectors from '../redux/transactions/transactionSelectors';
import style from './componentsCSS/Balance.module.css';

export default function Balance() {
  const allTransactions = useSelector(transactionSelectors.getAllTransactions);

  function numberWithSpaces(x) {
    let parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.');
  }

  const amount =
    allTransactions && allTransactions.transactions
      ? allTransactions.transactions[0].balance
      : 0;

  return (
    <div className={`${style.balance}`}>
      <h2 className={style.balance__title}>Ваш баланс</h2>
      <h3 className={style.balance__amount}>
        &#8372; {numberWithSpaces(amount)}
      </h3>
    </div>
  );
}
