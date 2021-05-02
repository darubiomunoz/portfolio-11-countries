import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

const API_URL = "https://restcountries.eu/rest/v2/all";

const initialState = {
  data: [],
  dataSafeCopy: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) console.error(response.status);
    const data = response.json();
    return data;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      let { filter } = action.payload;

      if (filter === 'America') filter = 'Americas';

      state.data = state.dataSafeCopy;

      const newData = state.data.filter(country => country.region === filter);

      if (filter !== "Filter by Region") state.data = newData;
      if (filter === "Filter by Region") state.data = state.dataSafeCopy;
    },
    searchBy: (state, action) => {
      const { search } = action.payload;

      state.data = state.dataSafeCopy;

      const newData = state.data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

      state.data = newData;
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "pending";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { payload } = action;

      state.status = "fulfilled";
      state.data = state.data.concat(payload);
      state.dataSafeCopy = state.dataSafeCopy.concat(payload);
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;

      state.status = "rejected";
      state.error = error.message;
    },
  },
});

export const { filterBy, searchBy } = countriesSlice.actions;

export default countriesSlice.reducer;
