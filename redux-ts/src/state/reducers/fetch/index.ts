import { createSlice } from '@reduxjs/toolkit';
import fetchUsers, { DataFetch } from './asyncThunk';

interface InitialState {
  data: DataFetch[];
  loading: boolean;
  error: string | undefined;
}
const initialState: InitialState = {
  data: [],
  loading: false,
  error: undefined,
};

const fetchSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.error = undefined;
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.loading = false;
        state.data = [];
        state.error = error.message;
      }),
});
export const fetchReducer = fetchSlice.reducer;
