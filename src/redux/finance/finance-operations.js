import axios from 'axios';
import {
  FETCHBALANCEREQUEST,
  FETCHBALANCESUCCESS,
  FETCHBALANCEERROR,
} from './finance-actions';

export const fetchBalance = () => async dispatch => {
  dispatch(FETCHBALANCEREQUEST());
  try {
    // const response = await axios.get('/finance');
    // const data = await response.data;
    const data = '24 000.00';

    dispatch(FETCHBALANCESUCCESS(data));
  } catch (error) {
    dispatch(FETCHBALANCEERROR(error));
  }
};
