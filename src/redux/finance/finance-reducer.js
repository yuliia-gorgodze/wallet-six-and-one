import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FETCHBALANCEREQUEST,
  FETCHBALANCESUCCESS,
  FETCHBALANCEERROR,
} from './finance-actions';

const totalBalance = createReducer(0, {
  [FETCHBALANCESUCCESS]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [FETCHBALANCEERROR]: (_, { payload }) => payload.message,
});

export const finance = combineReducers({ totalBalance, error });
