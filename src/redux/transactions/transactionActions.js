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
