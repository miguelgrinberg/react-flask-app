import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
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
