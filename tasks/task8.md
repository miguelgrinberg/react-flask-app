# Task: Add a search button

### User description

As a user, I want the search bar to have a magnifying glass icon/button to better indicate its functionality 

### To-do
- Add the following code to the `SearchBox.js` component

```css
<div class="input-group-append" onClick={() => props.handleSearchClick(props.searchValue)}>
  <div class="input-group-text" id="btnGroupAddon2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
  </div>
</div>
```

Think about where you want the button to sit to determine where to append the code above (e.g. on left or right of the search bar)

Pass a function to the `SearchBox` component that handles the logic of clicking on the magnifying glass

```js
<SearchBox 
  searchValue={searchValue} 
  setSearchValue={setSearchValue}
  handleSearchClick={getMovieRequest} // We pass the `getMovieRequest` function to the SearchBox component
/>
```

Optionally, you can disable the automatic search that happens each time you type in the search bar. Look for a `useEffect` code block that is called when `searchValue` is called and comment it out.

### Files to change

- src/App.js
- src/components/SearchBox.js
