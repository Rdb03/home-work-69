import {IApiTVShows, ITVShow} from '../../type';
import {createSlice} from "@reduxjs/toolkit";
import {fetchOneTVShow, fetchTvShows} from "./tvShowsThunk";
import {RootState} from "../../app/store";

export interface TvShowsState{
    shows: IApiTVShows[] | null;
    show: ITVShow | null;
    fetchLoading: boolean;
}

const initialState: TvShowsState = {
    shows: null,
    show: null,
   fetchLoading: false,
};

export const tvShowSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
      builder.addCase(fetchTvShows.fulfilled, (state, action) => {
            state.shows = action.payload;
            state.fetchLoading = false;
        });
        builder.addCase(fetchTvShows.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(fetchOneTVShow.pending, (state)=> {
            state.fetchLoading = true;
        });
        builder.addCase(fetchOneTVShow.fulfilled, (state, action) => {
            state.show = action.payload;
            state.fetchLoading = false;
        });
        builder.addCase(fetchOneTVShow.rejected, (state) => {
          state.fetchLoading = false;
        });
    }
});


export const selectTVShows = (state: RootState) => state.tvShows.shows;
export const selectTVShow = (state: RootState) => state.tvShows.show;
export const selectIsLoading = (state: RootState) => state.tvShows.fetchLoading;
export const TVShowReducer = tvShowSlice.reducer;
