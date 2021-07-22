import { createAction } from '@reduxjs/toolkit';

export const FILTERED_TRANSACTION_REQUEST = createAction(
  'modaltransaction/addNewTransactionRequest',
);
export const FILTERED_TRANSACTION_SUCCSESS = createAction(
  'modaltransaction/addNewTransactionSecces',
);
export const FILTERED_TRANSACTION_ERROR = createAction(
  'modaltransaction/addNewTransactionError',
);
// eslint-disable-next-line
export default {
  FILTERED_TRANSACTION_REQUEST,
  FILTERED_TRANSACTION_SUCCSESS,
  FILTERED_TRANSACTION_ERROR,
};
