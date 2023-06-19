# Challenge Task: Add recommended movies section

### **User description**

As a user, I want 2 movie recommendations whenever I add a new movie to my favourites.

### **Subtasks**

#### **1. Create the recommendation algorithm**

#### To-do
* Follow the tutorial in api/rec.ipynb file

#### **Files to change**

- recommend.py
- rec.ipynb

#### **2. Create the API endpoint** 

Create an API endpoint in the api.py that returns the list of IMDB IDs of recommended movies

#### To-do
- `@app.route` should be `/movies/imdbID/<searchValue>`
- Import the `get_recommendations` function from **recommend.py** you created earlier and use it to retrieve IMDB IDs of the recommended movies
- Import the `get_movies_by_id` function from **movie_details.py** file and use it to get movie details for each recommended movie using their IMDB ID
- Return a list of JSON Objects that include the details of the recommended movies

#### **Files to change**

- api.py