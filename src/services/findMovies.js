import axios from "axios";
import "../config/axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export function getTrendingMovies() {
  return axios.get("/trending/movie/week");
}

export function getMovie(movieId) {
  return axios.get(`/movie/${movieId}`);
}

export function getReviews(movieId) {
  return axios.get(`/movie/${movieId}/reviews`);
}

export function getCast(movieId) {
  return axios.get(`/movie/${movieId}/credits`);
}

export function searchMoviesService(query) {
  return axios
    .get("/search/movie", { params: { query } })
    .then((res) => res.data);
}
