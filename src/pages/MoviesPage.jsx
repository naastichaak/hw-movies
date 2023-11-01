import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { searchMoviesService } from "../services/findMovies";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
  });

  useEffect(() => {
    setIsLoading(true);

    searchMoviesService(searchParams.get("query"), searchParams.get("page"))
      .then((res) => {
        setMovies(res.results);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  function handleSearch(newQuery) {
    setSearchParams({
      query: newQuery,
    });
  }

  return (
    <div>
      <h1>MoviesPage</h1>

      <Searchbar
        onSearch={handleSearch}
        defaultValue={searchParams.get("query")}
      />

      <p>Search results for: {searchParams.get("query")}</p>

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
export default MoviesPage;
