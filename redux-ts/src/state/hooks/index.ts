import store from '../store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../persist'

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export const Dispatch: () => AppDispatch = useDispatch
export const Selector: TypedUseSelectorHook<RootState> = useSelector
