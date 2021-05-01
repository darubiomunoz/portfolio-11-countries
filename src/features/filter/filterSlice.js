import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Filter by Region';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const payload = action;
      return state = payload;
    }
  }
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;