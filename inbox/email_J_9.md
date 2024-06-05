Hi Team,

Our bills are too high! Can we reduce the amount of requests being sent to the server when a user searches for a movie?

Jeenal

## Tips

Look at [MainPage.jsx](../src/pages/MainPage.jsx)

The if statement on line 22 tells us that the request will not be sent if the search length is less than 0 by the "return" keyword. 

Make it so that it wont send a request if the search length is 2 or less.