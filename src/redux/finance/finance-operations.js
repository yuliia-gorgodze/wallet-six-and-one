import axios from 'axios';
import {
  FETCHBALANCEREQUEST,
  FETCHBALANCESUCCESS,
  FETCHBALANCEERROR,
} from './finance-actions';

export const fetchBalance = () => async dispatch => {
  dispatch(FETCHBALANCEREQUEST());
  try {
    const response = await axios.get('/transactions?sortByDesk=createdAt');

    dispatch(FETCHBALANCESUCCESS(response.data.data.transactions));
  } catch (error) {
    dispatch(FETCHBALANCEERROR(error));
  }
};
