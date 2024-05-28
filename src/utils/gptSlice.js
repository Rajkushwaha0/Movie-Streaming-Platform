import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    recomMovie: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addRecomMovie: (state, action) => {
      state.recomMovie = action.payload;
    },
  },
});

export const { toggleGptSearch, addRecomMovie } = gptSlice.actions;
export default gptSlice;
