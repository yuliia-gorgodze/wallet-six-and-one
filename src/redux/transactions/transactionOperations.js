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
      const { data } = await axios.get(
        `/transactions?limit=5&page=${page}&sortByDesk=createdAt`,
      );

      dispatch(getTransactionsSuccess(data.data));
    } catch (error) {
      dispatch(getTransactionsError(error));
    }
  };

// eslint-disable-next-line
export default { fetchTransactions };
