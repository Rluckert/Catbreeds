
import { configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./breedsSlice";

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export default store;
