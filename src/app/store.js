import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "../features/countries/countriesSlice";
import filterReducer from "../features/filter/filterSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
  },
});
