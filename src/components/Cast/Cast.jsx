import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQueryMovie } from "components/Services/Api";
import CastItem from 'components/CastItem/CastItem';
import css from './Cast.module.css'

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
  const getMovieCredits = async () => {
    try {
      const response = await fetchQueryMovie(`3/movie/${movieID}/credits?`);
      setCast([...response.cast]);
    } catch (error) {
      console.log('error');
    }
  };
  getMovieCredits();
}, [movieID]);

  return (
    <ul className={css.list}>
      {[cast.length] &&
        cast.map(item => <CastItem key={item.id} item={item} />)}
    </ul>
  );
};
export default Cast;




