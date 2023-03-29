import { useState, useEffect } from 'react';
import {fetchMovies} from 'services/Fetch';
import MoviesList from 'components/moviesList/MoviesList';
import { moviesMapper } from 'helpers/moviesMapper';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (page === 0) {
      return
    }
    setIsLoading(true);

    fetchMovies('trends', [page])
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false)
      })
  }, [page]);


  return (
    <><h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  )
}


export default Home