import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {IApiTVShows, IApiTVShowsList, ITVShow} from '../../type';

export const fetchTvShows = createAsyncThunk<IApiTVShows[], string>(
  'tvShows/fetchAll',
  async (name) => {
    const response = await axiosApi.get<IApiTVShowsList []>(`search/shows?q=${name}`);
    const showResponse = response.data;

      return  showResponse.map((item) => {
        return {
          id: item.show.id,
          name: item.show.name,
        };
      });
  });

export const fetchOneTVShow = createAsyncThunk<ITVShow, string>(
  'tvShow/fetchOne',
  async (tvShowId) => {
    const response = await axiosApi.get<ITVShow>(`${tvShowId}`);
    const data: ITVShow = response.data;
    return {
      name: data.name,
      id: data.id,
      summary: data.summary,
      image: data.image,
    };
  }
);