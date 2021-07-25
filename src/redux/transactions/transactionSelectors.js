const getIsLoading = state => state.transactions.loading;
const getAllTransactions = state => state.transactions.result;

// eslint-disable-next-line
export default {
  getIsLoading,
  getAllTransactions,
};
