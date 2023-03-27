import useMovieFetch from "services/Hook"

const MoviePage = () => {
    const movieObj = useMovieFetch()
    
    return (
      movieObj && (
        <>
          <img src={movieObj.data.belongs_to_collection.poster_path}></img>
          <div>
            <h2></h2>
            <p></p>
            <h3></h3>
            <p></p>
            <h3></h3>
            <p></p>
          </div>
        </>
      )
    );
}

export default MoviePage