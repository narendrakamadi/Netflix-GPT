import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        trailerVideo: null,
        popularTVShows: null,
        topRatedTVShows: null,
        airingTodayTVShows: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularTVShows: (state, action) => {
            state.popularTVShows = action.payload;
        },
        addTopRatedTVShows: (state, action) => {
            state.topRatedTVShows = action.payload;
        },
        addAiringTodayTVShows: (state, action) => {
            state.airingTodayTVShows = action.payload;
        },
    }
});

export const {
    addNowPlayingMovies,
    addTrailerVideo,
    addPopularMovies,
    addUpcomingMovies,
    addTopRatedMovies,
    addPopularTVShows,
    addTopRatedTVShows,
    addAiringTodayTVShows
} = moviesSlice.actions;

export default moviesSlice.reducer;