Hi Team,

We thought it'd be a great idea to be able to randomnly generate a reccommended movie to the user! A way to expand their horizons... What if there is a randomize button
on the webpage that when you click on it, it auto generates a single movie on the reccommended tab?


## Tips

So firstly, we need to create a button. Style it how you would like to - the code below creates a red button:

`<button className="p-2 bg-red-300 w-20" onClick={() => {}}>I am text that will be displayed on the button!</button>`

We can position the button if we wanted to, by surrounding it with a div:

```
<div className="self-center">
 <button className="p-2 bg-red-300 w-20" onClick={() => {}}>I am text that will be displayed on the button!</button>
</div>
```

Next, we need to be able to add a movie to the reccommended tab. There is a "dispatch" function that allows you to add movies to the reccommended list. We can invoke this function each time the button is clicked by passing the function into the onClick parameter in the button like so:

```
<button className="p-2 bg-red-300 w-20" onClick={() => {
      dispatch(
        {
          type: Actions.AddToRecommended,
          payload: CODE GOES HERE
        })
  }}>Random!</button>
```

Where we see "CODE GOES HERE" we need to put in the random movie choice. For example, if we wanted to choose the first item in the list of movies, we could just do this:

```
<button className="p-2 bg-red-300 w-20" onClick={() => {
      dispatch(
        {
          type: Actions.AddToRecommended,
          payload: moviesData[0]
        })
  }}>Random!</button>
```

This selects the first item in the array of movies. How would we change this so it's always a random movie?