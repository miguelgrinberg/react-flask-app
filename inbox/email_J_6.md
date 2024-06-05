Hi Team,

It would be useful to start getting some more information about the movies in addition to the title and the year. Please could you look into adding more details about each movie?

Jeenal

## Tips

There's already a pre-made [MovieDetails](../src/components/MovieDetails.jsx) component in the Components folder. 

It could be conditionally rendered when a movie poster is clicked on.

```
{showDetails && (
          <MovieDetails movie={props.movie} onClose={() => setShowDetails(false)} />
)} 
```