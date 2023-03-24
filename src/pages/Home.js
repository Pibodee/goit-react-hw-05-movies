import { useState, useEffect } from 'react';
import getTrends from 'services/Fetch';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (page === 0) {
          return
        }
        setIsLoading(true);

    getTrends(page)
        .then(
          {results}?setMovies([...results]):setMovies([...prev, ...results])
      )
            .catch(error => console.log(error))
        .finally(()=>{setIsLoading(false)})
  }, [page]);
};

return (
    <>
    </>
)