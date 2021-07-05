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
