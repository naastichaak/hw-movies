import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../services/findMovies";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then((res) => setMovies(res.data.results))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>

      {isLoading && <p>Loading...</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
