import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [recommendations, setRecommendations] = useState([]);

	const getMovieRequest = async (searchValue) => {
    	const url = `/movies/${searchValue}`

		fetch(url).then(res => res.json()).then(data => {
		if (data.Search) {
			setMovies(data.Search);
		}
		});
	};

	const getRecommendedMovies = async (favourites) => {
		const url = `/movies/recommend/${favourites[favourites.length - 1].imdbID}`;

        fetch(url).then(res => res.json()).then(data => {
            addRecommendedMovie(data)
        });
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (key, items) => {
		localStorage.setItem(key, JSON.stringify(items));

	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage('react-movie-app-favourites', newFavouriteList);
		getRecommendedMovies(newFavouriteList);
	};

	const addRecommendedMovie = (movie) => {
    	const newRecommendedList = recommendations.concat(movie)
    	let uniqueRecommendedList = newRecommendedList.filter(({imdbID}, index) => {
            return newRecommendedList.findIndex(item => item.imdbID === imdbID) === index;
        });

    	setRecommendations(uniqueRecommendedList);
    	saveToLocalStorage('react-movie-app-recommendations', uniqueRecommendedList);
    };

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage('react-movie-app-favourites', newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
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
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Recommendations' />
			</div>
			<div className='row'>
				<MovieList
					movies={recommendations}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
		</div>
	);
};

export default App;
