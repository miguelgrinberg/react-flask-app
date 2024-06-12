import { useEffect, useState } from "react";
import useMoviesContext from "../context/MoviesContext";
import FavouriteIcon from "./FavouriteIcon";
import { Actions } from "../reducers/moviesReducer";
import MovieService from "../services/MovieService";
import MovieDetails from "./MovieDetails";

export default function MovieCard(props) {
  const { Title, Year, Poster, imdbID } = props.movie;
  const [ isFavourite, setIsFavourite ] = useState(false);
  const [ showDetails, setShowDetails ] = useState(false);
  const { favouriteMovies, recommendedMovies, dispatch } = useMoviesContext();
  
  const handleMovieDetailsClose = () => {
    setShowDetails(false)
  };

  const handleMovieDetailsOpen = () => {
    setShowDetails(true)
  };

  const preventActionOnClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const movieIsInFavourites = !!favouriteMovies.find((movie) => movie.Title === Title);
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
        .then((movie) => {
          dispatch({
            type: Actions.AddToRecommended,
            payload: { recommendedMovies: [...recommendedMovies, movie] },
          });
        })
        .catch((err) => console.log(err));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="my-4 mx-4 flex flex-col align-middle">
      <div className="self-center flex items-center">
        <div className="flex flex-col items-center" >
          <img src={Poster} className="w-48 h-[15rem] shadow-2xl hover:scale-105" onClick={handleMovieDetailsOpen}/>
          <button type="button" onClick={handleClick} className="relative top-[-35px]" >
            <FavouriteIcon onClick={preventActionOnClick} isFavourite={isFavourite} />
          </button>
        </div>
        <div className="relative top-[-20px] text-center">
          <h1 className="text-3xl text-secondary">{Title}</h1>
          <p className="text-3xl text-accent">{Year}</p>
        </div>
      </div>
    </div>
  );
}
