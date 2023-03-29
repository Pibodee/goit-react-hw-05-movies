import { useState, useEffect, Suspense } from "react"
import { fetchMovies } from "services/Fetch";
import { useParams } from "react-router-dom";
import { Loader } from "components/loader/Loader";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [loader, setLoader] = useState(false)
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;
        setLoader(true)
      fetchMovies('reviews', movieId)
        .then(response => setReviews(response.results))
            .catch(error => console.log(error))
        .finally(setLoader(false))
    }, [movieId]);

    return (
        <>
            {loader && <Loader/>}
        {reviews && (
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>Review: {review.content}</p>
                </li>
              );
            })}
          </ul>
        )}
        {reviews.length === 0 && <h3>No reviews</h3>}
        <Suspense fallback={<Loader />} />
      </>
    );
}

export default Reviews