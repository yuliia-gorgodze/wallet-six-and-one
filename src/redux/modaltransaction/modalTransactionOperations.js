import axios from 'axios';
import {
  MODAL_IS_OPEN,
  ADD_NEW_TRANSACTION_SUCCES,
  ADD_NEW_TRANSACTION_REQUEST,
  ADD_NEW_TRANSACTION_ERROR,
} from './modalTransactionActions';
import {
  FILTERED_TRANSACTION_REQUEST,
  FILTERED_TRANSACTION_SUCCES,
  FILTERED_TRANSACTION_ERROR,
} from '../transactions/transactionActions';
import transactionOperations from '../transactions/transactionOperations';
import notification from '../../helpers/react-toastify';

export const modalTrancactionIsOpen = modalState => async dispatch => {
  dispatch(MODAL_IS_OPEN(modalState));
};

export const addTrancaction = transaction => async dispatch => {
  const result = {
    year: transaction.year,
    month: transaction.month,
    day: transaction.day,
    type: transaction.checkBox ? 'DEPOSIT' : 'WITHDRAW',
    category: transaction.category,
    comment: transaction.comment,
    amount: Number(transaction.transaction),
  };
  dispatch(ADD_NEW_TRANSACTION_REQUEST());
  try {
    await axios
      .post(`${axios.defaults.baseURL}/transactions`, result)
      .then(data => {
        dispatch(ADD_NEW_TRANSACTION_SUCCES(data.data.data.transaction));
        //update table online
        dispatch(transactionOperations.fetchTransactions());
        notification.sucess('Транзакция успешно добавлена');
      })
      .catch(er => console.log(er));
  } catch (error) {
    console.log(error);
    dispatch(ADD_NEW_TRANSACTION_ERROR('Не удалось добавить'));
    notification.error('Что-то пошло не так!');
  }
};
export const filteredMounthAndYearsTransactions =
  transaction => async dispatch => {
    console.log(transaction.year, transaction.month);
    const monthCorrect =
      transaction.month < 10
        ? `0${transaction.month}`
        : String(transaction.month);
    // dispatch(FILTERED_TRANSACTION_REQUEST())
    if (transaction.year !== '' && transaction.month !== '') {
      const year = `&year=${String(transaction.year)}`;
      const month = `&monht=${String(monthCorrect)}`;
      try {
        await axios
          .get(
            `${axios.defaults.baseURL}/transactions?&filter=day|month|year|category|amount${month}${year}`,
          )
          .then(data => {
            dispatch(FILTERED_TRANSACTION_SUCCES(data.data.data.transactions));
            // update table online
            console.log(data.data.data.transactions);
          })
          .catch(er => console.log(er));
      } catch (error) {
        console.log(error);
        dispatch(FILTERED_TRANSACTION_ERROR('Не удалось получить транзакции'));
        notification.error('Что-то пошло не так!');
      }
    }
  };
