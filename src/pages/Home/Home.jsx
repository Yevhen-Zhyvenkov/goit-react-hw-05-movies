import GalleryItem from "components/GalleryItem/GalleryItem";
import { fetchQueryMovie } from "components/Services/Api";
import { useEffect, useState } from "react";
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  const getTrendingMovies = async () => {
    try {
      const response = await fetchQueryMovie('3/trending/all/day?');
      setMovies([...response.results]);
    } catch (error) {
      console.log(error);
    }
  };
  getTrendingMovies();
  }, []);

  return (
    <ul className={css.list}>
      {movies.length &&
        movies.map(movie => <GalleryItem key={movie.id} item={movie} />)}
    </ul>
  );
};

export default Home; 