# Task: Add a sort button to sort movies alphabetically

### User description

As a user, I'd like to be able to sort my search results alphabetically.

### To-do
-  Add the following code snippet in the App.css file and update the fields called `some_number` with the appropriate values to position the sort button.
```css
.sort-button {
	padding-left: <some_number>px;
	padding-right: <some_number>px;
}
```

-  Add the following code snippet in the App.js file to sort movies whenever `sortMovies` function is called
```js
const [sortedMovies, setSortedMovies] = useState([]);

useEffect(() => {
	setMovies(sortedMovies);
}, [sortedMovies]);

const sortMovies = (movies) => {|
	setSortedMovies(movies.sort((a, b) => a.Title > b.Title))|
};

```

-  Add the following code snippet in the App.js file to display the sort button
```js
<SortButton movies={movies} handleSortClick={sortMovies}/>
```
### Files to change

- App.js
- App.css
