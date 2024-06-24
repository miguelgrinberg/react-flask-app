Hey team,

Search looks good! Can we try hooking it up some logic so that it now works?

Phil

## Tips

On the main page, you will see a function that is commented out:

`setMovies(moviesData.filter())`

In JavaScript, when you see `// some comment`, it means that this code will not run. By removing //, the code will run.

The filter method takes a function and runs it against the array of movies. To find out more, look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Can you create a function, that filters through the list of movies, but only keeps the movies that contain the search term entered in the search bar?

As a bonus, can you make it so that the filtering function is case insensitive?
