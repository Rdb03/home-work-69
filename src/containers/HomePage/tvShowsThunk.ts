import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {IApiTVShows, IApiTVShowsList} from "../../type";

export const fetchTvShows = createAsyncThunk<IApiTVShows[], string>(
    'tvShows/fetch',
    async (name) => {
        const response = await axiosApi.get<IApiTVShowsList| null>(`search/shows?q=${name}`);
        const tasksResponse = response.data;
        let tvShows: IApiTVShows[] = [];

        if (tasksResponse) {
            tvShows = Object.keys(tasksResponse).map((id) =>({
                ...tasksResponse[id],
                id
            }));
        }
        return tvShows;
    });
