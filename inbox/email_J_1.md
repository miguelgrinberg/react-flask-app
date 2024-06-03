Hi Team,

I think we could make better use of the real estate on the page. Can we increase the number of films we can see on a row
at any one time? Maybe we start with 5?

Jeenal

## Tips

On the [MainPage](../src/pages/MainPage.jsx), look for this line:

`<div className="grid grid-cols-1">`

This specifies that the layout of the movies should be in a grid format, with 1 column

Useful resource [here](https://tailwindcss.com/docs/grid-template-columns)