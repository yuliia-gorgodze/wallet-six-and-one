import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionActions';

const fetchTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    // console.log(data.data);

    // console.log(data, 'data');
    dispatch(getTransactionsSuccess(data.data));
  } catch (error) {
    dispatch(getTransactionsError(error));
  }
};

export default { fetchTransactions };
