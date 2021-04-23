import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "https://restcountries.eu/rest/v2/all";

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch(API_URL);
  if(!response.ok) console.error(response.status);
  const data = response.json();
  console.log(data);
  return data;
});

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "pending";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { payload } = action;

      state.status = "fulfilled";
      state.data = state.data.concat(payload);
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;

      state.status = "rejected";
      state.error = error.message;
    },
  },
});

export const {  } = countriesSlice.actions;

export default countriesSlice.reducer;
