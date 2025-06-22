Morning team,

Or should I say afternoon? Sorry, it was a late one last night, we were in the pub getting excited about our product.
We were talking about the landing page where we show all movies. Movies after the year 2000 are awful! I think
we should filter them out so that we only ever show movies made before the year 2000.

Nik

## Tips

It sounds like we have some pretty opinionated requirements!

Take a look at [MainPage](../src/pages/MainPage.jsx) and at this code:

`const moviesData = mockedMovies.Search`

Search is a list of movies. [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in JavaScript have a number of ready-made functions available on them, for example,
map, filter, forEach.

The general way to use them is as follows:

`mockedMovies.Search.map(() => {})`

For example, if we wanted to print the title of each movie in the Search array, we could do this:

`mockedMovies.Search.map((movie) => {console.log(movie.Title)})`

What could we do to filter out the movies that aren't the original 3 Star Wars films?
