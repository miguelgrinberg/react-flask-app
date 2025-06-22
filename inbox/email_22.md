Hi Team,

Users are complaining the website is getting slow when searching for movies!
Can we only search for movies when a user enters more than three characters?

Jeenal

## Tips

Look at [MainPage.jsx](../src/pages/MainPage.jsx)

The if statement on line 22 tells us that the request will not be sent if the search length is less than 0 by the "return" keyword. 
