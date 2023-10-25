import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SharedLayout from "./layouts/SharedLayouts";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import CastPage from "./pages/CastPage";
import ReviewsPage from "./pages/ReviewsPage";

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
export default App;
