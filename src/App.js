import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import YearBox from './components/YearBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import { Button } from 'bootstrap';
import SearchButton from './components/SearchButton';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [yearValue, setYearValue] = useState('');
	const [url, setUrl] = useState('');

	const getMovieRequest = async (searchValue,yearValue) => {

	// if (yearValue) {
	// 	setUrl(`/movies/${searchValue}`)
	// } else {
	setUrl(`/movies/${searchValue}/${yearValue}`)


    fetch(url).then(res => res.json()).then(data => {
      if (data.Search) {
        setMovies(data.Search);
      }
    });
	};

	// useEffect(() => {
	// 	getMovieRequest(searchValue, yearValue);
	// }, [searchValue, yearValue]);

	// useEffect(() => {
	// 	getMovieRequest(searchValue, yearValue);
	// }, [search]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const getMovies = () => {
		getMovieRequest(searchValue, yearValue)
	};

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				<YearBox yearValue={yearValue} setYearValue={setYearValue} />
				<button 
					type="button" 
					class="btn btn-light"
					onClick={getMovies}
				>Search</button>
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
	);
};

export default App;
