Afternoon Devs,

We need some more colour on the website. We're thinking big, bright beautiful colours that differentiate our website from 
all the other movie websites out there. Change the title of the movie cards to give some oomph!

Nik


## Tips

Take a look at [MovieCard.jsx](../src/components/MovieCard.jsx) and look for this line:

`<h1 className="text-3xl text-secondary">{Title}</h1>`

Text-secondary is a pre-defined CSS configuration whose colour is mapped in [index.css](../src/index.css). By storing the colours
in the CSS file, it means that anywhere on the site where we use "text-secondary" will have the same colour. We could
either change the colour there, or, another way is to try changing:

`text-secondary`

to any variation of

`text-red`

or

`text-blue`

Once you start typing `text-` you should see a list of auto suggested colours...
