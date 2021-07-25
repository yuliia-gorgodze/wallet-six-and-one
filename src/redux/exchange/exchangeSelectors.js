import _ from 'lodash';

export const getTime = state => state.exchange.time;

export const getCurrencies = state => state.exchange.currencies;
export const getCount = state => _.isEmpty(state.exchange.currencies);
