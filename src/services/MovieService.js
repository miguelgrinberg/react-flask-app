import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_CODESPACE_NAME
    ? import.meta.env.VITE_CODESPACE_NAME
    : "http://localhost:3000/",
  headers: {
    "X-GitHub-Token": import.meta.env.VITE_GITHUB_TOKEN
      ? import.meta.env.VITE_GITHUB_TOKEN
      : "",
  },
});

const responseBody = (response) => response.data;

const methods = {
  get: (url) => instance.get(url).then(responseBody),
};

const MovieService = {
  getMoviesByName: (movieName) => methods.get("/movies/" + movieName),
  getRecommendedMovies: (imdbID) => methods.get("/movies/recommend/" + imdbID),
};

export default MovieService;
