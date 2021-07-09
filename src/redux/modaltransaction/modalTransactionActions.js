import { createAction } from '@reduxjs/toolkit';

export const MODAL_IS_OPEN = createAction('modaltransaction/modalIsOpen');
export const ADD_NEW_TRANSACTION = createAction(
  'modaltransaction/addNewTransaction',
);
