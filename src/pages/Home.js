import { useState, useEffect } from 'react';
import { fetchTrends} from 'services/Fetch';
import MoviesList from 'components/moviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }, []);


  return (
    <><h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  )
}


export default Home