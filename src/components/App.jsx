import { Routes, Route} from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Layout from 'components/Layout/Layout';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import css from './App.module.css'



export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
    </div>
  );
};


