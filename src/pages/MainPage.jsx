import { useEffect, useState } from "react";
import NavBar, { Tabs } from "../components/NavBar";
import MovieService from "../services/MovieService";
import MovieCard from "../components/MovieCard";
import useMoviesContext from "../context/MoviesContext";
import SearchBar from "../components/SearchBar";

export default function MainPage() {

  const [ search, setSearch ] = useState("");
  const { favouriteMovies, recommendedMovies } = useMoviesContext();
  const [ tabName, setTabName ] = useState(Tabs.Movie);
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    if (tabName !== Tabs.Movies) {
      setTabName(Tabs.Movies);
    }

    if (search.length < 3) {
      return;
    }

    MovieService.getMoviesByName(search)
      .then((movies) => setMovies(movies.Search))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      <NavBar setTab={setTabName}>
        <SearchBar setSearchValue={setSearch} search={search} />
      </NavBar>
      <div className="w-full flex flex-col">
        <h1 className="mt-8 mb-6 ml-12 text-bold text-2xl text-secondary">
          {tabName}
        </h1>
        <div className="grid grid-cols-5">
          {tabName === Tabs.Movies && movies?.length
            ? movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
          {tabName === Tabs.Favourites && favouriteMovies?.length
            ? favouriteMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
          {tabName === Tabs.Recommended && recommendedMovies?.length
            ? recommendedMovies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
