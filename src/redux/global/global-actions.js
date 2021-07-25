import { createAction } from '@reduxjs/toolkit';

export const SETMODALLOGOUTSTATEREQUEST = createAction(
  'global/setModalLogoutStateRequest',
);
export const SETMODALLOGOUTSTATESUCCESS = createAction(
  'global/setModalLogoutStateSuccess',
);
export const SETMODALLOGOUTSTATEERROR = createAction(
  'global/setModalLogoutStateError',
);

export const setModalFooterRequest = createAction(
  'global/setModalFooterRequest',
);
export const setModalFooterSuccess = createAction('auth/setModalFooterSuccess');
export const setModalFooterError = createAction('auth/setModalFooterError');
