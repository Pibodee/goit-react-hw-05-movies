import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element/>
          <Route path="movies" />
          <Route path="movies/:movieId">
            <Route path="cast" />
            <Route path="review" />
          </Route>
      </Route>
      </Routes>
    </>
  );
};
