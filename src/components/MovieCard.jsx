import { useEffect, useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import useFavouriteMovies from "../context/FavouriteMoviesContext";

export default function MovieCard(props) {
  const { Title, Year, Poster } = props.movie;
  const [ isFavourite, setIsFavourite ] = useState(false);
  const { favouriteMovies, addToFavourites, removeFromFavourites } = useFavouriteMovies();

  useEffect(() => {
    const movieIsInFavourites = favouriteMovies.find((movie) => movie.Title === Title);

    if (movieIsInFavourites) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [isFavourite, Title]);

  const handleClick = () => {
    if (isFavourite) {
      removeFromFavourites(props.movie);
    } else {
      addToFavourites(props.movie);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="flex flex-col align-middle">
      <div className="self-center">
        <div className="flex flex-col items-center">
          <img src={Poster} className="w-48 h-[15rem] shadow-2xl" />
          <button
            type="button"
            onClick={handleClick}
            className="relative top-[-35px]"
          >
            {isFavourite ? (
              <IoStar size="30px" color="gold" />
            ) : (
              <IoStarOutline
                size="30px"
                color="gold"
                className="opacity-75 hover:opacity-100"
              />
            )}
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
