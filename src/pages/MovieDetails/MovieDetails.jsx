import React, { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useParams, useLocation, Link} from 'react-router-dom';
import { fetchQueryMovie } from "components/Services/Api";
import css from './MovieDetails.module.css'


const MovieDetails = () => {
  const { movieID } = useParams();
  const [searchResult, setSearchResult] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
  const getMovieDetails = async () => {
    try {
      const response = await fetchQueryMovie(`3/movie/${movieID}?`);
      setSearchResult(response);
    } catch (error) {
      console.log(error);
    }
  };
  getMovieDetails();
  }, [movieID]);

  return (
    <>
      <Link className={css.back} to={backLinkLocationRef.current}>Back</Link>
      <div className={css.container}>
        <img className={css.image}
          src={
            searchResult.poster_path
              ? `https://image.tmdb.org/t/p/w500${searchResult.poster_path}`
              : 'http://dummyimage.com/150x200/c0c0c0'
          }
          alt=""
        />
        <div className={css.info}>
          <h1 className={css.title}>
            {searchResult.original_name ||
            searchResult.original_title ||
            'Not found'}
          </h1>
          <p>User score: {searchResult.vote_average * 10 || 'Not found'}%</p>
          <h3>Overview</h3>
          <p>{searchResult.overview || 'Not found'}</p>
          <h3>Genres</h3>
          <p>
            {searchResult.genres === []
              ? searchResult.genres.map(genre => genre.name).join(', ')
              : 'Not found'}
          </p>
        </div>
      </div>
      <hr></hr>
      <section>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </section>
      <hr></hr>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;