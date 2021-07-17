import axios from 'axios';
import {
  FETCHBALANCEREQUEST,
  FETCHBALANCESUCCESS,
  FETCHBALANCEERROR,
} from './finance-actions';

export const fetchBalance = () => async dispatch => {
  dispatch(FETCHBALANCEREQUEST());
  try {
    const response = await axios.get('/transactions');
    const data = await response.data;
    const transactions = await data.data.transactions;
    if (transactions.length > 0) {
      const balance = transactions[transactions.length - 1].balance;
      dispatch(FETCHBALANCESUCCESS(balance));
    } else {
      const balance = 0;
      dispatch(FETCHBALANCESUCCESS(balance));
    }
  } catch (error) {
    dispatch(FETCHBALANCEERROR(error));
  }
};
