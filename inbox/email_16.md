Hi Team,

a new feature is being requested where we need to display details when a user clicks on a movie.

Jeenal

## Tips

There's already a pre-made [MovieDetails](../src/components/MovieDetails.jsx) component in the Components folder. 

To use this component, we need to go to [MovieCard.jsx](../src/components/MovieCard.jsx), on line 54 we have a conditional render.

What this is saying is when showDetails equals true, do whatever is after "&&", currently it does nothing (null).

In our case, we want to display this component:

`<MovieDetails imdbID={} onClose={}/>`

Inside the curly braces of imdbID, we need to pass in the ID of the movie.

Inside the curly branches of onClose, we need to pass in the function that handles closing the movie details component. (Look at the top of MovieCard.jsx for the function that sets showDetails to false)