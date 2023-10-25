import axios from "axios";

const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDVmOTk0MDExYzhjOTAzODM2YjFmYTAwZjM5MTFjNyIsInN1YiI6IjY1MTJjYTYwMjZkYWMxMDE0ZTIzYmNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rMeme7WwSsl7nK0Pblc0sy_Inxs6xWHoS0MBKZ07bVk";

axios.defaults.headers.authorization = `Bearer ${apiKey}`;
