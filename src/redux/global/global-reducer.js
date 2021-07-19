import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  SETMODALLOGOUTSTATEREQUEST,
  SETMODALLOGOUTSTATESUCCESS,
  SETMODALLOGOUTSTATEERROR,
  setModalFooterSuccess,
  setModalFooterError,
} from './global-actions';

const isModalLogoutOpen = createReducer(false, {
  [SETMODALLOGOUTSTATESUCCESS]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [SETMODALLOGOUTSTATEERROR]: (_, { payload }) => payload.message,
  [setModalFooterError]: (_, { payload }) => payload.message,
});

const isModalFooter = createReducer(false, {
  [setModalFooterSuccess]: (_, { payload }) => payload,
});

export const global = combineReducers({
  isModalLogoutOpen,
  isModalFooter,
  error,
});
