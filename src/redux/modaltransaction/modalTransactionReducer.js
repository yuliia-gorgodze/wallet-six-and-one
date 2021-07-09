import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  MODAL_IS_OPEN,
  ADD_NEW_TRANSACTION_SUCCES,
  ADD_NEW_TRANSACTION_ERROR,
} from './modalTransactionActions';

const isModalTransaction = createReducer(false, {
  [MODAL_IS_OPEN]: (_, { payload }) => payload,
});
const addNewTransaction = createReducer(
  {},
  {
    [ADD_NEW_TRANSACTION_SUCCES]: (_, { payload }) => payload,
  },
);
const error = createReducer(null, {
  [ADD_NEW_TRANSACTION_ERROR]: (_, { payload }) => payload,
});
export const trasaction = combineReducers({
  isModalTransaction,
  addNewTransaction,
  error,
});
