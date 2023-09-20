import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt-search",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggltGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggltGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
