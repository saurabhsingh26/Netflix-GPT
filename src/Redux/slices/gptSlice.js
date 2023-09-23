import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt-search",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    toggltGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      state.gptMovies = action.payload;
    },
    removeGptMovieResults: (state) => {
      state.gptMovies = null;
    },
  },
});

export const { toggltGptSearchView, addGptMovieResults, removeGptMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;
