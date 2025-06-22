Hi Team,

Can we add search functionality to the website? Ideally, I'd like the search bar to be inside the Navbar.

Jeenal

## Tips

There's already a pre-made [SearchBar](../src/components/SearchBar.jsx) in the Components folder. You can use composition to place this inside the Navbar. The Navbar can accept child components via the syntax:

`    <NavBar>
        <Insert Component Here>
    </NavBar>`

SearchBar requires a function to be passed into it to work, the syntax is as follows:

`<SearchBar setSearch={}>`

Can you figure out which function it requires to be passed into the curly brackets?

And then finally, to get the SearchBar working, on the main page, you will see a function that is commented out:

`setMovies(moviesData.filter())`

If this code is commented out, it will run every time something is typed into the search bar. The filter method takes a function and runs it against the array of movies. To find out more, look [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Can you create a function, that filters through the list of movies, but only keeps the movies that contain the search term entered into the search bar?

As a bonus, can you make it so that the filtering function is case-insensitive?
