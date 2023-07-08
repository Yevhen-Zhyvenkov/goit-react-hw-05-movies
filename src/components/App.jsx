import { Routes, Route} from "react-router-dom";
import { lazy } from "react";
import css from './App.module.css'
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Layout = lazy(() => import('components/Layout/Layout'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));



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


