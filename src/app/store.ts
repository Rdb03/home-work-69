import {configureStore} from "@reduxjs/toolkit";
import {TVShowReducer} from "../containers/HomePage/tvShowsSlice";


export const store = configureStore({
    reducer: {
        tvShows: TVShowReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;