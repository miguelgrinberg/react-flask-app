export const initialState = {
  favouriteMovies: [],
};

const favouriteMoviesReducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case "add_to_favourites":
      return {
        favouriteMovies: data.favouriteMovies,
      };

    case "remove_from_favourites":
      return {
        favouriteMovies: data.favouriteMovies,
      };

    default:
      throw new Error(`Unknown action: ${type.action}`);
  }
};

export default favouriteMoviesReducer;
