import {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {selectTVShows} from './tvShowsSlice';
import {fetchTvShows} from './tvShowsThunk';
import {Link, Outlet, useLocation} from 'react-router-dom';
import './TVShows.css';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const tvShows = useAppSelector(selectTVShows);
    const [tvShow, setTVShow] = useState('');
    const [show, setShow] = useState(false);
    const  location = useLocation();

    useEffect(() => {
        dispatch(fetchTvShows(tvShow));
    }, [dispatch, tvShow]);

    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setTVShow(e.target.value);
        setShow(true);
    };

    const handleSuggestionClick = (suggestion: string) => {
      if (location.pathname === '/') {
        setTVShow('');
      } else if (setTVShow.length > 0) {
        setTVShow('');
      } else {
        setShow(false);
        return setTVShow(suggestion);
      }
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
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    {tvShows && show && tvShow.length > 2 && (
                        <ul className="tvShows-list">
                            {tvShows.map((result) => (
                                <li key={result.id} onClick={() => handleSuggestionClick(result.name)}>
                                    <Link to={`/shows/${result.id}`} className="tvShow-name">{result.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
              <Outlet/>
            </div>
        </div>
    );
};

export default HomePage;
