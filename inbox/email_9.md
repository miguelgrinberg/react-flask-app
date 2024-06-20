Hey team,

Can we add a search to the top of the page please? We think the first thing that users want to do is just to be able to search quickly for the film they are looking for

To start with, can we just take a look at what it looks like on the page?

Phil

## Tips

There's already a pre-made [Search](../src/components/SearchBar.jsx) in the Components folder. Can you see how you would import it into the layout of the website?

Once you've imported it, you'll find that it ends up on two lines. To get everything to sit on one line, you'll need to surround the component with div tags, and add a classname of `flex`

Search requires a function to be passed into it to work, the syntax is as follows:

`<Search setSearch={}>`

Can you figure out which function it requires passed into the curly brackets?
