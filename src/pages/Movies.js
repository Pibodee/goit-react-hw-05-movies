import MoviesList from 'components/moviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/Fetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setSearchParams({ movieName: form.elements.movieName.value });
  };

  useEffect(() => {
    if (!movieName) return;
    fetchMovies('query', [page, movieName])
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => console.log(error));
  }, [movieName, page]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
      <Outlet />
    </>
  );
};

export default Movies;
