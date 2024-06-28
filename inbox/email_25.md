Hi Team,

Every movie a user clicks on, it keeps showing them details for a Star Wars movie. Can this be fixed ASAP please.

Jeenal

## Tips

Go to [MovieDetails.jsx](../src/components/MovieDetails.jsx), line 14

We are always setting the details to "mockedMovieDetails"

By using the IMDb ID of a movie we clicked on, we can send a request to OMDb and get details for the movie.

We do something like this in [MainPage.jsx](../src/pages/MainPage.jsx) to search for movies.

Inside the useEffect in [MovieDetails.jsx](../src/components/MovieDetails.jsx), type "MovieService." and you will get a list of functions, use the one that allows us to get details for a movie.