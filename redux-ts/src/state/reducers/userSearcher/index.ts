import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearcherSlice {
  userInputValue: string;
  autoComplete: boolean;
}

const initialState: SearcherSlice = {
  userInputValue: '',
  autoComplete: false,
};

const searcherSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    changeVal(state, { payload }: PayloadAction<string>) {
      state.userInputValue = payload;
    },
    autoComp(state, { payload }: PayloadAction<boolean>) {
      state.autoComplete = payload;
    },
  },
});
export const inputUserActions = searcherSlice.actions;
export const inputUserReducer = searcherSlice.reducer;
