import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userReduser,
        movies: moviesReducer,
        gpt: gptReducer,
    },
});

export default appStore;