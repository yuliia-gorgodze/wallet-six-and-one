import { useDispatch } from 'react-redux';
import styles from './componentsCSS/ButtonAddTransaction.module.css';
import { modalTrancactionIsOpen } from '../redux/modaltransaction/modalTransactionOperations';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();
  const closeModal = e => {
    dispatch(modalTrancactionIsOpen(true));
  };
  return (
    <button
      onClick={closeModal}
      className={styles.buttonAddTransaction}
      type="button"
    ></button>
  );
}
