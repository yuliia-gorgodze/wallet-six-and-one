import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { MODAL_IS_OPEN } from './modalTransactionActions';

const isModalTransaction = createReducer(false, {
  [MODAL_IS_OPEN]: (_, { payload }) => payload,
});

export const trasaction = combineReducers({ isModalTransaction });
