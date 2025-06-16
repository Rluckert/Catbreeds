import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breedList: [],
  filteredBreedList: [],
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setBreeds: (state, action) => {
      state.breedList = action.payload;
      state.filteredBreedList = action.payload;
    },
    setFilteredBreeds: (state, action) => {
      state.filteredBreedList = action.payload;
    },
  },
});

export const { setBreeds, setFilteredBreeds } = breedsSlice.actions;
export default breedsSlice.reducer;
