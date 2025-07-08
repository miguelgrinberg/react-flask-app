Hey Team,

Things are looking good! Can we add some spacing between the Movie poster and the text on the right to really make use
of some screen real estate?

Phil

## Tips

Take a look at [MovieCard](../src/components/MovieCard.jsx) and look for this block of code:

```html       
<div className="relative top-[-20px] text-center">
    <h1 className="text-sm text-secondary">{Title}</h1>
    <p className="text-xs text-accent">{Year}</p>
</div>
```

This acts as the container for the text of the movie card. The parent container is the outer most div. We could add
some separation between this block of text and the movie poster by adding some css to the outer most div of this code block.

After `text-center` try adding `ml-x` where x is a number (again, use the prompts that appear after typing ml- to guide you).
ml is the CSS equivalent to "margin-left" and will essentially add space between the text and picture.

Useful reference guide on margin [here](https://tailwindcss.com/docs/margin)
