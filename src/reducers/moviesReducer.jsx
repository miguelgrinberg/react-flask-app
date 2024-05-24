export const initialState = {
  favouriteMovies: [],
  recommendedMovies: []
};

export const Actions = Object.freeze({
  AddToFavourites: "add_to_favourites",
  RemoveFromFavourites: "remove_from_favourites",
  AddToRecommended: "add_to_recommended",
  RemoveFromRecommended: "remove_from_recommended"
});

const moviesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.AddToFavourites:
      return {
        ...state,
        favouriteMovies: payload.favouriteMovies,
      };

    case Actions.RemoveFromFavourites:
      return {
        ...state,
        favouriteMovies: payload.favouriteMovies,
      };
    case Actions.AddToRecommended:
      return {
        ...state,
        recommendedMovies: payload.recommendedMovies,
      };

    case Actions.RemoveFromRecommended:
      return {
        ...state,
        recommendedMovies: payload.recommendedMovies,
      };

    default:
      throw new Error(`Unknown action: ${type.action}`);
  }
};

export default moviesReducer;
