import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  FILTERED_TRANSACTION_REQUEST,
  FILTERED_TRANSACTION_SUCCES,
  FILTERED_TRANSACTION_ERROR,
} from './transactionActions';

const result = createReducer(
  {},
  {
    [getTransactionsSuccess]: (_, { payload }) => payload,
  },
);
const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
});

export default combineReducers({
  result,
  loading,
});
