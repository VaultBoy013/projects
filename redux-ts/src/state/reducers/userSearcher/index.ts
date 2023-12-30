import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface SearcherSlice {
  userInputValue: string;
  autoComplete: boolean;
  alert: boolean
}

const initialState: SearcherSlice = {
    userInputValue: "",
    autoComplete: false,
    alert: false
};

const name = "searcher";

const searcherSlice = createSlice( {
    name,
    initialState,
    reducers: {
        changeVal( state, { payload }: PayloadAction<string> ) {
            state.userInputValue = payload;
        },
        autoComp( state, { payload }: PayloadAction<boolean> ) {
            state.autoComplete = payload;
        },
        alertForm( state, { payload }: PayloadAction<boolean> ) {
            state.alert = payload;
        },
    },
} );
export const searcherActions = searcherSlice.actions;
export const searcherReducer = searcherSlice.reducer;
