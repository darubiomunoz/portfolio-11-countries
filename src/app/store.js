import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "../features/countries/countriesSlice";
import filterReducer from "../features/filter/filterSlice";
import searchReducer from "../features/search/searchSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    search: searchReducer,
    theme: themeReducer,
  },
});
