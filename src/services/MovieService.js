import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_CODESPACE_NAME ? import.meta.env.VITE_CODESPACE_NAME : "http://localhost:3000/",
});

const responseBody = (response) => response.data;

const methods = {
  get: (url) => instance.get(url).then(responseBody),
};

const MovieService = {
  getMoviesByName: (movieName) => methods.get("/movies/" + movieName),
  getMovieDetails: (imdbID) => methods.get("/movie/" + imdbID),
};

export default MovieService;
