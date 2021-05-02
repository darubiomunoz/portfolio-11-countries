import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      if (state === 'light') return 'dark';
      if (state === "dark") return "light";
    }
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
