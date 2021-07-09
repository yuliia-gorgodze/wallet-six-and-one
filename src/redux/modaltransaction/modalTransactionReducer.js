import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { MODAL_IS_OPEN, ADD_NEW_TRANSACTION } from './modalTransactionActions';

const isModalTransaction = createReducer(false, {
  [MODAL_IS_OPEN]: (_, { payload }) => payload,
});
const addNewTransaction = createReducer(
  {},
  {
    [ADD_NEW_TRANSACTION]: (_, { payload }) => payload,
  },
);
export const trasaction = combineReducers({
  isModalTransaction,
  addNewTransaction,
});
