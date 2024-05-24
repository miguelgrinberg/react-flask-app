import { createContext, useContext, useReducer } from "react";
import moviesReducer, { initialState } from "../reducers/moviesReducer";

const MoviesContext = createContext(initialState);

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const value = {
    favouriteMovies: state.favouriteMovies,
    recommendedMovies: state.recommendedMovies,
    dispatch,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

function useMoviesContext() {
  const context = useContext(MoviesContext);

  if (context === undefined) {
    throw new Error("useMoviesContext must be used within MoviesProvider");
  }

  return context;
}

export default useMoviesContext;
