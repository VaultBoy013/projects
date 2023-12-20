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
import searcherReducer from '../reducers/userSearcher'

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
  blacklist: ['fetchReducer'],
}
export const rootReducer = combineReducers({ fetchReducer, searcherReducer })
export const persistedReducer = persistReducer(persistConfig, rootReducer)
