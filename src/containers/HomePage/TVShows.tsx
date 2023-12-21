import {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hook.ts';
import {selectTVShows} from './tvShowsSlice.ts';
import {fetchTvShows} from "./tvShowsThunk.ts";
import './TVShows.css';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const tvShows = useAppSelector(selectTVShows);
    const [tvShow, setTVShow] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(fetchTvShows(tvShow));
    }, [dispatch, tvShow]);

    const change = (e: ChangeEvent<HTMLInputElement>) => {
       setTVShow(e.target.value);
        setShow(true);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setShow(false);
        return setTVShow(suggestion);
    };

    return (
        <div className="container">
            <div className="home-page">
                <p className="home-page-txt">Search for TV Show:</p>
                <div className="autocomplete-div">
                    <div>
                        <input
                            className="input-films"
                            value={tvShow}
                            onChange={change}
                            required
                            type="text"
                            autoComplete="off"
                            placeholder="Enter TV Show"
                        />
                        <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    {tvShows && show && tvShow.length > 3 && (
                        <ul className="tvShows-list">
                            {tvShows.map((result) => (
                                <li key={result.show.id} onClick={() => handleSuggestionClick(result.show.name)}>
                                    <a className="tvShow-name">{result.show.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
