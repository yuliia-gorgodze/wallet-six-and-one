import { createAction } from '@reduxjs/toolkit';

export const FILTERED_TRANSACTION_REQUEST = createAction(
  'selectTransaction/filterTransactionRequest',
);
export const FILTERED_TRANSACTION_SUCCESS = createAction(
  'selectTransaction/filterTransactionSucces',
);
export const FILTERED_TRANSACTION_ERROR = createAction(
  'selectTransaction/filterTransactionError',
);
// eslint-disable-next-line
export default {
  FILTERED_TRANSACTION_REQUEST,
  FILTERED_TRANSACTION_SUCCESS,
  FILTERED_TRANSACTION_ERROR,
};
