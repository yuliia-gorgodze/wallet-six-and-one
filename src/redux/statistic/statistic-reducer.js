import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import statisticActions from './statistic-actions';

const initialUserState = { transactions: null };

const transactions = createReducer(initialUserState, {
  [statisticActions.FILTERED_TRANSACTION_SUCCESS]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [statisticActions.FILTERED_TRANSACTION_REQUEST]: () => true,
  [statisticActions.FILTERED_TRANSACTION_SUCCESS]: () => false,
  [statisticActions.FILTERED_TRANSACTION_ERROR]: () => false,
});

export default combineReducers({
  transactions,
  loading,
});
