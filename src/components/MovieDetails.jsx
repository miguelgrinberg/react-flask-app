import React, { useEffect, useState } from "react";
import MovieService from "../services/MovieService";


export default function MovieDetails(props) {
    const [details, setDetails] = useState("");

    useEffect(() => {
      MovieService.getMovieDetails(props.movie.imdbID)
      .then((movie) => setDetails(movie))
      .catch((error) => console.log(error))
  }, [props.movie.imdbID]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex justify-center items-center text-secondary">
        <div className="p-4 bg-inherit flex flex-col justify-center align-middle ">
          <h2 className="text-xl font-bold text-secondary text-center">{props.movie.Title}</h2>
          <p className="text-sm text-center">{props.movie.Year}</p>
          <br />
          <p className="text-sm text-center">Plot: {details.Plot}</p>
          <p className="text-sm text-center">Genre: {details.Genre}</p>
          <br />
          <p className="text-sm text-center">IMDb Rating: {details.imdbRating}</p>
          <button className="mt-4 px-4 py-2 w-[50%] m-auto align-middle justify-center bg-primary text-white rounded hover:bg-blue-700" onClick={props.onClose}>
            <p>Close</p>
          </button>
        </div>
    </div>
  );
};
