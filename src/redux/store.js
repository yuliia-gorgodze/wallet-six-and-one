import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { finance } from './finance/finance-reducer';
import { global } from './global/global-reducer';
import { trasaction } from './modaltransaction/modalTransactionReducer';
import authReducer from './auth/auth-reducer';
import exchangeReducer from './exchange/exchangeReducer';

const persistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    trasaction,
    finance,
    global,
    auth: persistedAuthReducer,
    exchange: exchangeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export const reduxStore = { store, persistor };
