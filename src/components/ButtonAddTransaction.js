import styles from './componentsCSS/ButtonAddTransaction.module.css';
import svgAddButton from '../assets/icons/addTransaction.svg';
export default function ButtonAddTransaction() {
  return (
    <button className={styles.buttonAddTransaction} type="button"></button>
  );
}
