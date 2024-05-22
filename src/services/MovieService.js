import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.omdbapi.com"
})

const responseBody = (response) => response.data;
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

const methods = {
  get: (url) => instance.get(url).then(responseBody),
}

const MovieService = {
  getMoviesByName: (movieName, index) => methods.get("/?s=" + movieName + `&page=${index}` + "&apikey=" + API_KEY),
}

export default MovieService;