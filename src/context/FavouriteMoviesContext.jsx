import { createContext, useContext, useReducer } from "react";
import favouriteMoviesReducer, { initialState } from "../reducers/favouriteMoviesReducer";

const FavouriteMoviesContext = createContext(initialState);

export const FavouriteMoviesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(favouriteMoviesReducer, initialState);

  const addToFavourites = (movie) => {
    const updatedFavourites = state.favouriteMovies.concat(movie);

    dispatch({
      type: "add_to_favourites",
      data: {
        favouriteMovies: updatedFavourites,
      },
    });
  };

  const removeFromFavourites = (movie) => {
    const updatedFavourites = state.favouriteMovies.filter(
      (currentFavouriteMovies) => movie.imdbID !== currentFavouriteMovies.imdbID
    );

    dispatch({
      type: "remove_from_favourites",
      data: {
        favouriteMovies: updatedFavourites,
      },
    });
  };

  const value = {
    favouriteMovies: state.favouriteMovies,
    addToFavourites,
    removeFromFavourites,
  };

  return (
    <FavouriteMoviesContext.Provider value={value}>
      {children}
    </FavouriteMoviesContext.Provider>
  );
};

function useFavouriteMovies() {
  const context = useContext(FavouriteMoviesContext);

  if (context === undefined) {
    throw new Error(
      "useFavouriteMovies must be used within FavouriteMoviesProvider"
    );
  }

  return context;
}

export default useFavouriteMovies;
