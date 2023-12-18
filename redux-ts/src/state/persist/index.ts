import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import fetchReducer from '../reducers/fetch'

export const ignoredActions = [
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
]

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
}
export const rootReducer = combineReducers({ fetchReducer })
export const persistedReducer = persistReducer(persistConfig, rootReducer)
