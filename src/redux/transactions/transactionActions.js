import { createAction } from '@reduxjs/toolkit';

export const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
export const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
export const getTransactionsError = createAction(
  'transactions/getTransactionsError',
);
export const FILTERED_TRANSACTION_REQUEST = createAction(
  'modaltransaction/addNewTransactionRequest',
);
export const FILTERED_TRANSACTION_SUCCES = createAction(
  'modaltransaction/addNewTransactionSecces',
);
export const FILTERED_TRANSACTION_ERROR = createAction(
  'modaltransaction/addNewTransactionError',
);
