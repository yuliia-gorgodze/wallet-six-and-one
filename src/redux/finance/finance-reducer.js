import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FETCHBALANCEREQUEST,
  FETCHBALANCESUCCESS,
  FETCHBALANCEERROR,
} from './finance-actions';

const totalBalance = createReducer(0, {
  [FETCHBALANCESUCCESS]: (_, { payload }) => payload[0].balance,
});

const error = createReducer('', {
  [FETCHBALANCEERROR]: (_, { payload }) => payload.message,
});

const loading = createReducer(false, {
  [FETCHBALANCEREQUEST]: () => true,
  [FETCHBALANCESUCCESS]: () => false,
  [FETCHBALANCEERROR]: () => false,
});

export const finance = combineReducers({ totalBalance, loading, error });
