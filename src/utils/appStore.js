import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
    reducer: {
        user: userReduser,
        movies: moviesReducer,
    },
});

export default appStore;