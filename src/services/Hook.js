import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from './Fetch';

const useMovieFetch = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovies('movie', [movieId])
        .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);
    
    console.log(movie)
    return movie
};

export default useMovieFetch