import { createAction } from '@reduxjs/toolkit';

export const MODAL_IS_OPEN = createAction('modaltransaction/modalIsOpen');
export const ADD_NEW_TRANSACTION_REQUEST = createAction(
  'modaltransaction/addNewTransactionRequest',
);
export const ADD_NEW_TRANSACTION_SUCCES = createAction(
  'modaltransaction/addNewTransactionSecces',
);
export const ADD_NEW_TRANSACTION_ERROR = createAction(
  'modaltransaction/addNewTransactionError',
);
