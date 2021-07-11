import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionActions';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload.transactions,
});
const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
});

export default combineReducers({
  result,
  loading,
});
