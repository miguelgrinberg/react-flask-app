import { useEffect, useState } from "react";
import { Tabs } from "../components/NavBar";
import MovieService from "../services/MovieService";
import MovieCard from "../components/MovieCard";
import useMoviesContext from "../context/MoviesContext";
import {mockedMovies} from "../mocks/movies";

export default function MainPage() {

  const moviesData = mockedMovies.Search
  const [ search, setSearch ] = useState("");
  const { favouriteMovies, recommendedMovies } = useMoviesContext();
  const [ tab, setTab ] = useState(Tabs.Movie);
  const [ movies, setMovies ] = useState(moviesData);

  useEffect(() => {
    if (tab !== Tabs.Movies) {
      setTab(Tabs.Movies);
    }

    if (search.length < 0) {
      return;
    }

    MovieService.getMoviesByName(search)
      .then((movies) => setMovies(movies.Search))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <div className="w-full flex flex-col">
        <h1 className="mt-8 mb-6 ml-12 text-bold text-7xl text-secondary text-center">
          {tab}
        </h1>
        <div className="grid grid-cols-1">
          {tab === Tabs.Movies && movies?.length
            ? movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
          {tab === Tabs.Favourites && favouriteMovies?.length
            ? favouriteMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
          {tab === Tabs.Recommended && recommendedMovies?.length
            ? recommendedMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
