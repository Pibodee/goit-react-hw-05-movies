import { useEffect, useState, Suspense } from "react"
import { useParams } from "react-router-dom"
import { fetchMovies } from "services/Fetch"
import { Loader } from "components/loader/Loader"

const Cast = () => {
    const [cast, setCast] = useState([])
    const [loader, setLoader] = useState(false)
    const { movieId } = useParams()
    
    useEffect(() => {
      if (!movieId) return;
      setLoader(true);
      fetchMovies('cast', movieId)
        .then(data =>setCast(data.cast))
        .catch(error => console.log(error))
      .finally(setLoader(false))
    }, [movieId]);

  return (
    <>{loader && <Loader/>}
      <ul>
        {cast &&
          cast.map(star => {
            return (
              <li key={star.id}>
                <img
                  src={
                    star.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${star.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2022/11/16/23/57/movie-theater-7597054_960_720.png'
                  }
                  width="100"
                  height="135"
                  alt={star.name}
                />
                <p>Name: {star.name}</p>
                <p>Role: {star.character}</p>
              </li>
            );
          })}
        {cast.length === 0 && <h2>Mothing Here</h2>}
        <Suspense fallback={<Loader />} />
      </ul>
    </>
  );
}

export default Cast