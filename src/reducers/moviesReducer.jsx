export const initialState = {
  favouriteMovies: [],
  recommendedMovies: [],
};

export const Actions = Object.freeze({
  AddToRecommended: "add_to_recommended",
  RemoveFromRecommended: "remove_from_recommended",
  UpdateFavourites: "update_favourites",
});

const moviesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.UpdateFavourites:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.map((movie) => movie.imdbID).includes(payload.imdbID)
          ? state.favouriteMovies.filter((movie) => movie.imdbID !== payload.imdbID)
          : [...state.favouriteMovies, payload],
      };
    case Actions.AddToRecommended:
      return {
        ...state,
        recommendedMovies: [payload]
      };

    case Actions.RemoveFromRecommended:
      return {
        ...state,
        recommendedMovies: [payload]
      };

    default:
      throw new Error(`Unknown action: ${type.action}`);
  }
};

export default moviesReducer;
