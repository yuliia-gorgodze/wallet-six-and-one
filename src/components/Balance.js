import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBalance } from '../redux/finance/finance-operations';
import { getBalance } from '../redux/finance/finance-selectors';
import style from './componentsCSS/Balance.module.css';

export default function Balance() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);
  const amount = useSelector(getBalance);
  return (
    <div className={`${style.balance}`}>
      <h2 className={style.balance__title}>Ваш баланс</h2>
      <h3 className={style.balance__amount}>&#8372; {amount}</h3>
    </div>
  );
}
