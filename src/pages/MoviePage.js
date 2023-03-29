import useMovieFetch from 'services/Hook';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/Fetch';
import MovieElement from 'components/movieElement/MovieElement';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovies('movie', [movieId])
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    movie && (
      <>
        <MovieElement movie={movie} />
        <Outlet />
      </>
    )
  );
};

export default MoviePage;
