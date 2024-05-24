import { useEffect, useState } from "react";
import useMoviesContext from "../context/MoviesContext";
import FavouriteIcon from "./FavouriteIcon";
import { Actions } from "../reducers/moviesReducer";
import MovieService from "../services/MovieService";

export default function MovieCard(props) {
  const { Title, Year, Poster, imdbID } = props.movie;
  const [isFavourite, setIsFavourite] = useState(false);
  const { favouriteMovies, recommendedMovies, dispatch } = useMoviesContext();

  useEffect(() => {
    const movieIsInFavourites = !!favouriteMovies.find(
      (movie) => movie.Title === Title
    );
    setIsFavourite(movieIsInFavourites);
  }, [isFavourite, Title]);

  const handleClick = () => {
    if (isFavourite) {
      const updatedFavourites = favouriteMovies.filter((currentFavouriteMovies) => imdbID !== currentFavouriteMovies.imdbID);
      dispatch({
        type: Actions.RemoveFromFavourites,
        payload: { favouriteMovies: updatedFavourites },
      });
    } else {
      dispatch({
        type: Actions.AddToFavourites,
        payload: { favouriteMovies: [...favouriteMovies, props.movie] },
      });

      MovieService.getRecommendedMovies(imdbID)
        .then((movies) => {
          dispatch({
            type: Actions.AddToRecommended,
            payload: { recommendedMovies: [...recommendedMovies, movies] },
          });
        })
        .catch((err) => console.log(err));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="my-4 mx-4 flex flex-col align-middle">
      <div className="self-center">
        <div className="flex flex-col items-center">
          <img src={Poster} className="w-48 h-[15rem] shadow-2xl" />
          <button
            type="button"
            onClick={handleClick}
            className="relative top-[-35px]"
          >
            <FavouriteIcon isFavourite={isFavourite} />
          </button>
        </div>
        <div className="relative top-[-20px] text-center">
          <h1 className="text-sm text-secondary">{Title}</h1>
          <p className="text-xs text-accent">{Year}</p>
        </div>
      </div>
    </div>
  );
}
