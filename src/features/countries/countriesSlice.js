import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = "https://restcountries.eu/rest/v2/all";

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

const fetchData = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch(API_URL);
  if(!response.ok) console.error(response.status);
  const data = response.json();

  return data;
});
