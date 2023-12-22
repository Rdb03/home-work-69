import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchOneTVShow} from '../../containers/HomePage/tvShowsThunk';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {selectIsLoading, selectTVShow} from '../../containers/HomePage/tvShowsSlice';
import Spinner from '../Spinner/Spinner';
import './TVShow.css';

const TvShow = () => {
  const dispatch = useAppDispatch();
  const oneTVShow = useAppSelector(selectTVShow);
  const isLoading = useAppSelector(selectIsLoading);
  const url = useLocation().pathname;

  useEffect(() => {
    dispatch(fetchOneTVShow(url));
  }, [dispatch, url]);

  if (isLoading || !oneTVShow) {
    return <Spinner />;
  }

  const getStr = () => {
    return { __html: oneTVShow.summary };
  };

  return (
    <div className="tvShow-div">
      <div className="image-div">
        {oneTVShow.image  ? (
          <img
            className="tvShow-img"
            src={oneTVShow.image.original}
            alt={oneTVShow.name}
          />
        ) : <img className="tvShow-img" src="https://via.placeholder.com/300"  alt="no image" />}
      </div>
      <div className="text-tvShow d-flex flex-column p-2 justify-content-center text-center">
        <p>{oneTVShow.name}</p>
        {oneTVShow.summary ? (
          <div dangerouslySetInnerHTML={getStr()}></div>
        ) : (
          <p className="description">No description</p>
        )}
      </div>
    </div>
  );
};

export default TvShow;
