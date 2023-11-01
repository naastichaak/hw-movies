import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../services/findMovies";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getMovie(movieId)
      .then((res) => setMovie(res.data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <h1>MovieDetailsPage</h1>

      {isLoading && <p>Loading...</p>}

      {movie && (
        <div>
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="poster"
          />
          <h1>{movie.original_title}</h1>
          <p>{movie.tagline}</p>
          <hr />
          {movie.genres.map((genre) => (
            <span key={genre.id}> {genre.name} </span>
          ))}
          <p>{movie.overview}</p>
        </div>
      )}

      <Link to="reviews">Reviews</Link>
      <br />
      <Link to="cast">Cast</Link>

      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
