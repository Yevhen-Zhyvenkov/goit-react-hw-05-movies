import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQueryMovie } from "components/Services/Api";
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';


const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
  const getMovieReviews = async () => {
    try {
      const response = await fetchQueryMovie(`3/movie/${movieID}/reviews?`);
      setReviews([...response.results]);
    } catch (error) {
      console.log('error');
    }
  };
  getMovieReviews();
  }, [movieID]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <ReviewsItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};
export default Reviews;