import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchQueryMovie } from "components/Services/Api";
import GalleryItem from 'components/GalleryItem/GalleryItem';
import css from './Movies.module.css'

const Movies = () => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return alert('Enter the text !');
    }
    setSearchParams({ query: value });
    setValue('');
  };

  useEffect(() => {
  const movie = searchParams.get('query');
  if (movie) {
    const searchMovies = async () => {
      try {
        const response = await fetchQueryMovie(`3/search/movie?query=${movie}&`);
        if (response.results.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
        setSearchResult([...response.results]);
      } catch (error) {
        console.log(error);
      }
    };
    searchMovies();
  }
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchMovie"
          value={value}
          placeholder='Enter the name of the movie !'
          onChange={handleChange}
        />
        <button className={css.button}>Search</button>
      </form>
      <ul className={css.list}>
        {searchResult.map(movie => (
          <GalleryItem key={movie.id} item={movie} />
        ))}
      </ul>
      {error ? (
        <p>No movie found with that name "{searchParams.get('query')}", try again !</p>
      ) : null}
    </>
  );
};

export default Movies;