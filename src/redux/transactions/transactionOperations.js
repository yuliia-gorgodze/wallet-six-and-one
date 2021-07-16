import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionActions';

const fetchTransactions =
  (page = 1) =>
  async dispatch => {
    dispatch(getTransactionsRequest());

    try {
      const { data } = await axios.get(`/transactions?limit=5&page=${page}`);
      // console.log(data.data);

      // console.log(data, 'data');
      dispatch(getTransactionsSuccess(data.data));
    } catch (error) {
      dispatch(getTransactionsError(error));
    }
  };

export default { fetchTransactions };
