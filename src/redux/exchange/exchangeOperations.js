import moment from 'moment';

import { fetchExchange } from '../../helpers/exchangeApiService';
import { getTime, getCount } from './exchangeSelectors';

import {
  loadExchangeStart,
  loadExchangeSuccess,
  loadExchangeError,
} from './exchangeActions';

const fixTo100 = number => Math.round(number * 100) / 100;

export default () => (dispatch, getState) => {
  const state = getState();
  const stateTime = getTime(state);
  const condTime = moment().subtract(3, 'm').valueOf();

  if (!getCount(state) && stateTime < condTime) return;

  dispatch(loadExchangeStart());
  console.log('here');

  fetchExchange()
    .then(response => {
      console.log(response);
      const currencies = {};
      response.data.forEach(({ ccy, buy, sale }) => {
        currencies[ccy] = { buy: fixTo100(buy), sale: fixTo100(sale) };
      });

      dispatch(loadExchangeSuccess(currencies));
    })
    .catch(error => dispatch(loadExchangeError(error)));
};
