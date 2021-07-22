import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import statisticActions from './statistic-actions';

const initialUserState = { email: null, name: null };

const transactions = createReducer(initialUserState, {
  [statisticActions.FILTERED_TRANSACTION_SUCCSESS]: (_, { payload }) => payload,
});

export default combineReducers({
  transactions,
});
