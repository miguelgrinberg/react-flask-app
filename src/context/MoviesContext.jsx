import { createContext, useContext, useReducer, useState } from "react";
import moviesReducer, { initialState } from "../reducers/moviesReducer";
import { Tabs } from "../components/NavBar";

const MoviesContext = createContext(initialState);

export const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const [tab, setTab] = useState(Tabs.Movies);

  const value = {
    favouriteMovies: state.favouriteMovies,
    recommendedMovies: state.recommendedMovies,
    currentTab: tab,
    setTab: setTab,
    dispatch,
  };

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

function useMoviesContext() {
  const context = useContext(MoviesContext);

  if (context === undefined) {
    throw new Error("useMoviesContext must be used within MoviesProvider");
  }

  return context;
}

export default useMoviesContext;
