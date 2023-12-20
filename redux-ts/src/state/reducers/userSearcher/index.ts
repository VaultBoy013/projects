import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearcherSlice {
  changeValue: string
  autoComplete: boolean
}

const initialState: SearcherSlice = {
  changeValue: '',
  autoComplete: false,
}

const searcherSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    changeVal(state, { payload }: PayloadAction<string>) {
      state.changeValue = payload
    },
    autoComp(state, { payload }: PayloadAction<boolean>) {
      state.autoComplete = payload
    },
  },
})
export const { changeVal, autoComp } = searcherSlice.actions
export default searcherSlice.reducer
