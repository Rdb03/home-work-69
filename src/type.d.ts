export interface IApiTVShows{
    name: string;
    id: string;
}

export interface IApiTVShowsList {
    [key: string]: IApiTVShows;
}

export interface ITVShow {
  name: string;
  id: string;
  image: {
    original: string;
  };
  summary: htmlString;
}
