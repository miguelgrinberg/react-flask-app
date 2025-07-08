Hi Team,

Can we add search functionality to the website? Ideally, I'd like the search bar to be inside the Navbar.

Jeenal

## Tips

There's already a pre-made [SearchBar](../src/components/SearchBar.jsx) in the Components folder. You can use composition to place this inside the Navbar. The Navbar can accept child components via the syntax:

```html
<NavBar>
    <Insert Component Here/>
</NavBar>
```

SearchBar requires a function to be passed into it to work, the syntax is as follows:

`<SearchBar setSearch={}>`

Can you figure out which function it requires to be passed into the curly brackets?

And then finally, to get the SearchBar working, on the main page, you will see a function that is commented out:

`setMovies(moviesData.filter())`

Can you create a function that filters through the list of movies,
but only keeps the movies that start with the search term entered into the search bar?

Here is how I can filter for movies that end with the input from the search bar, but this is incorrect...

`setMovies(moviesData.filter(movie => movie.Title.endsWith(search)))`

What about [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)?

As a bonus, can you make it so that the filtering function is case-insensitive?
