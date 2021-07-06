import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { finance } from './finance/finance-reducer';
import { global } from './global/global-reducer';
import { trasaction } from './modaltransaction/modalTransactionReducer';
import authReducer from './auth/auth-reducer';
import exchangeReducer from './exchange/exchangeReducer';

const store = configureStore({
  reducer: {
    trasaction,
    finance,
    global,
    auth: authReducer,
    exchange: exchangeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const reduxStore = { store };
