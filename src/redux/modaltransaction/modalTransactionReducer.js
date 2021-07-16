import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  MODAL_IS_OPEN,
  ADD_NEW_TRANSACTION_SUCCES,
  ADD_NEW_TRANSACTION_ERROR,
  ADD_NEW_TRANSACTION_REQUEST,
} from './modalTransactionActions';

const isModalTransaction = createReducer(false, {
  [MODAL_IS_OPEN]: (_, { payload }) => payload,
});
const addNewTransaction = createReducer([], {
  [ADD_NEW_TRANSACTION_SUCCES]: (state, { payload }) => [...state, payload],
});
const error = createReducer(null, {
  [ADD_NEW_TRANSACTION_ERROR]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [ADD_NEW_TRANSACTION_REQUEST]: () => true,
  [ADD_NEW_TRANSACTION_SUCCES]: () => false,
  [ADD_NEW_TRANSACTION_ERROR]: () => false,
});
export const trasaction = combineReducers({
  isModalTransaction,
  addNewTransaction,
  error,
  loading,
});
