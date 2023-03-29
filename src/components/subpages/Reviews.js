import { useState, useEffect } from "react"
import { fetchMovies } from "services/Fetch";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();

    useEffect(() => {
      if (!movieId) return;
      fetchMovies('reviews', [movieId])
        .then(response => setReviews(response.results))
        .catch(error => console.log(error));
    }, [movieId]);

    return (
      <>
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
         {reviews.length ===0 && <h3>No reviews</h3>}
        
      </>
    );
}

export default Reviews