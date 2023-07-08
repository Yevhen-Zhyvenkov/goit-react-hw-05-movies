
const ReviewsItem = ({ item }) => {
  return (
    <li>
      <p>{item.author || 'Not found'}</p>
      <p>{item.content || 'Not found'}</p>
    </li>
  );
};

export default ReviewsItem;

