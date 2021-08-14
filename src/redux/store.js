import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [...getDefaultMiddleware({serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }}), logger];


const mainReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export  { store, persistor };
