import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionActions';

const fetchTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('http://localhost:3000/db.json');
    console.log(data, 'data');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error));
  }
};

export default { fetchTransactions };
