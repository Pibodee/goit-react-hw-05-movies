import { Link, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/loader/Loader";

const MovieElement = ({ movie }) => {
  const location = useLocation()
  const getGenres = genres => {
    if (!genres) return 'No genres';
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
            : `https://cdn.pixabay.com/photo/2022/11/16/23/57/movie-theater-7597054_960_720.png`
        }
        width="350"
        height="500"
        alt={movie.title}
      />
      <h2>
        {movie.title}({new Date(movie.release_date).getFullYear()})
      </h2>
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>

      <h3>Gengres:</h3>
      <p>{getGenres(movie.genres)}</p>

      <h3>Additional information</h3>
      <Link to={'cast'} state={location.state}>
        Cast
      </Link>
      <Link to={'reviews'} state={location.state}>
        Reviews
      </Link>
      <Suspense fallback={<Loader />} />
    </div>
  );
};

export default MovieElement;