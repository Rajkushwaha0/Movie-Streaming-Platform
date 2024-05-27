import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./congifSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    movies: movieSlice.reducer,
    gpt: gptSlice.reducer,
    language: configSlice.reducer,
  },
});

export default appStore;
