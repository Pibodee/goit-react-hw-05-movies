import Home from "pages/Home";
import MoviePage from "pages/MoviePage";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MoviePage/>}>
            <Route path="cast" />
            <Route path="review" />
          </Route>
      </Route>
      </Routes>
    </>
  );
};
