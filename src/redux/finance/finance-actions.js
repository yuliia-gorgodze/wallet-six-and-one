import { createAction } from '@reduxjs/toolkit';

export const FETCHBALANCEREQUEST = createAction('finance/fetchBalanceRequest');
export const FETCHBALANCESUCCESS = createAction('finance/fetchBalanceSuccess');
export const FETCHBALANCEERROR = createAction('finance/fetchBalanceError');
