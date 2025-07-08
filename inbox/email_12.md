Hi Team,

I'm not sure if I like the text being to the right of the movie. Can we try having it below the movie poster?

Jeenal

## Tips

On the [MovieCard](../src/components/MovieCard.jsx), look for this line:

`<div className="flex items-center self-center">`

Flex is a CSS layout, and its effect here is to put the children of the movie card container next to one another.
By default, if not specified, each child component of the parent would take up the entire width of the parent container.

Let's see what happens when we remove `flex`