Hi Team,

OMDb is quite expensive. To utilise all its features, please can you quickly check if OMDB API provides the ability to not just search for movies but series as well?

Want a proof of concept though not a final implementation, let me know if this is possible. 
 
Jeenal

## Tips

Check out the api code written in Python in [api.py](api/api.py), line 18. The block of code from line 18 - 22 defines a method written in Python. This is used to get information from the Open Movie Database (OMDb). 

Methods are a few lines of code used to perform a specific task.

In this method, we use a url pointing to the Open Movie Database (OMDb) to get back more information. This url is a combination of conditions joined by an '&'

For example: "http://www.omdbapi.com/?s=star&apikey=API_KEY" is a combination of two conditions 
* s=star
* apikey=API_KEY

If we copied this url with an real api key and put it in a Google browser, we would be able to see what the Open Movie Database (OMDb) returns. 

Take a look at the [Open Movie Database (OMDb)](https://www.omdbapi.com/) documentation to see if Jeenal's request is possible. 
