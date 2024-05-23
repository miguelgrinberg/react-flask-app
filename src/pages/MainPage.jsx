import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import MovieService from "../services/MovieService";
import { movies } from "../mocks/movies";
import MovieCard from "../components/MovieCard";
import useFavouriteMovies from "../context/FavouriteMoviesContext";
import SearchBar from "../components/SearchBar";

export default function MainPage() {
  const moviesData = movies.Search;

  const [search, setSearch] = useState("");
  const { favouriteMovies } = useFavouriteMovies();
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   MovieService.getMoviesByName(search, 1)
  //     .then((movies) => {
  //       setMovies(movies.Search);
  //     })
  //     .catch((err) => console.log(err));
  // }, [search]);

  useEffect(() => {
    console.log(favouriteMovies);
  }, [favouriteMovies]);

  return (
    <div>
      <NavBar>
        <SearchBar setSearchValue={setSearch} />
      </NavBar>
      <div className="w-full flex flex-col">
        <h1 className="mt-8 mb-6 ml-12 text-bold text-2xl text-secondary">
          Movies
        </h1>
        <div className="grid grid-cols-5">
          {moviesData.length
            ? moviesData.map((movie) => (
                <div key={movie.Title} className="my-4 mx-4">
                  <MovieCard movie={movie} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
