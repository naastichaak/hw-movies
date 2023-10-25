import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../config/axios";
import axios from "axios";

function ReviewsPage() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`)
      .then((res) => setReviews(res.data.results))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <h3>Reviews:</h3>
      {isLoading && <p>Loading...</p>}

      {reviews.length === 0 ? (
        <p>This movie doesnt have reviews</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ReviewsPage;
