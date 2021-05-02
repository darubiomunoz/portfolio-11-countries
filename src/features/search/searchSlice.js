import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      const { search } = action.payload;
      return search;
    }
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;