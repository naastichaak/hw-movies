import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import SharedLayout from "../layouts/SharedLayouts";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
