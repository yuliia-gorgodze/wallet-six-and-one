import { createSelector } from 'reselect';

const getIsLoading = state => state.transactions.loading;
const getAllTransactions = state => state.transactions.result;

export default {
  getIsLoading,
  getAllTransactions,
};
