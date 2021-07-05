import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  SETMODALLOGOUTSTATEREQUEST,
  SETMODALLOGOUTSTATESUCCESS,
  SETMODALLOGOUTSTATEERROR,
} from './global-actions';

const isModalLogoutOpen = createReducer(false, {
  [SETMODALLOGOUTSTATESUCCESS]: (_, { payload }) => payload,
});

const error = createReducer('', {
  [SETMODALLOGOUTSTATEERROR]: (_, { payload }) => payload.message,
});

export const global = combineReducers({ isModalLogoutOpen, error });
