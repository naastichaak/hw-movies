import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCast } from "../services/findMovies";

function CastPage() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCast(movieId)
      .then((res) => setCast(res.data.cast))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      <h3>Cast:</h3>
      {isLoading && <p>Loading...</p>}

      {cast.length === 0 ? (
        <p>This movie doesnt have cast</p>
      ) : (
        <ul>
          {cast.map((casts) => (
            <li key={casts.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${casts.profile_path}`}
              />
              {casts.character} - {casts.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CastPage;
