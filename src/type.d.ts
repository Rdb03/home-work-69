export interface ITVShows {
    name: string,
}

export interface IApiTVShows extends ITVShows {
    show: any;
    map(arg0: (show: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: string;
}

export interface IApiTVShowsList {
    [id: string]: IApiTask;
}