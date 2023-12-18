import { createSlice } from '@reduxjs/toolkit'

const initialState: string[] = []

const fetchSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdd: () => {},
  },
})

export default fetchSlice.reducer
