import React, { useEffect, useState } from "react";
import { mockedMovieDetails } from "../mocks/movieDetails";
import { IoStar } from "react-icons/io5";

export default function MovieDetails({ onClose, imdbID }) {
  const [details, setDetails] = useState(null);

  const preventActionOnClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setTimeout(() => setDetails(mockedMovieDetails), 200);
  }, [imdbID]);

  return details ? (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center align-middle text-secondary" onClick={onClose}>
      <div className="h-96 flex" onClick={preventActionOnClick}>
        <img src={details?.Poster} className="w-60" />
        <div className="w-96 flex flex-col justify-between p-4 bg-background">
          <div>
            <h1 className="text-2xl mb-5">{details?.Title}</h1>
            <div className="flex flex-row justify-between text-xs mb-5 text-center align-middle items-center">
              <h3 className="text-primary">{details?.Genre}</h3>
              <div className="flex flex-row gap-2 items-center text-accent select-none">
                <span className="bg-black/20 p-2 rounded-lg flex items-center"><IoStar color="gold"/>{details?.imdbRating}/10</span>
                <h3 className="bg-black/20 p-2 rounded-lg">{details?.Rated}</h3>
                <h3 className="bg-black/20 p-2 rounded-lg">{details?.Runtime}</h3>
              </div>
            </div>
          </div>
          <div>
            <p className="text-secondary text-[13px]">{details?.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
