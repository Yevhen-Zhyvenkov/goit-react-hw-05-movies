import css from './CastItem.module.css';


const CastItem = ({ item }) => {
  return (
    <>
      <li className={css.item}>
        <div>
           <img className={css.image}
            src={
            item.profile_path !== null
              ? 'https://image.tmdb.org/t/p/w500' + item.profile_path
              : 'https://dummyimage.com/150x250/c0c0c0'
          }
          alt={item.name}
          width={200}
        />
        <p>{item.name || 'Not found'}</p>
        <p>Character: {item.character || 'Not found'}</p>
       </div>
      </li>
    </>
  );
};
export default CastItem;
