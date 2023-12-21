import {IApiTVShows} from "../../type";
import {createSlice} from "@reduxjs/toolkit";
import {fetchTvShows} from "./tvShowsThunk.ts";
import {RootState} from "../../app/store.ts";

export interface TvShowsState{
    name: IApiTVShows[] | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: TvShowsState = {
    name: null,
    isLoading: false,
    isError: false,
};

export const tvShowSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchTvShows.pending, (state)=> {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchTvShows.fulfilled, (state, action) => {
            state.name = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTvShows.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});


export const selectTVShows = (state: RootState) => state.tvShows.name;
export const TVShowReducer = tvShowSlice.reducer;
