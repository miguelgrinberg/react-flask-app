# Task: Display list of movies upon initial page start-up

### User description

As a user, I'd like to see all Star Wars movies when the website initialises instead of darkness. 

### To-do
-  Add the following code snippet and update the movie name with respect to the users requests:
```js
useEffect(() => {
		getMovieRequest("Star Wars");
	}, []);
```

### Files to change

- src/App.js
