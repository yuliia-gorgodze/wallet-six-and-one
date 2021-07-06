import { createAction } from '@reduxjs/toolkit';

export const loadExchangeStart = createAction('LOAD_EXCHANGE/START');

export const loadExchangeSuccess = createAction(
  'LOAD_EXCHANGE/SUCCESS',
  currencies => ({
    payload: { currencies },
  }),
);

export const loadExchangeError = createAction('LOAD_EXCHANGE/ERROR', error => ({
  payload: { message: error.message },
  meta: { error: true },
}));
