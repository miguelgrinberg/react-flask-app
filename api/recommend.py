import pandas as pd
import requests

input={
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
        }

def recommend(input):
    # column_names = ['genres-id', 'genres-name', 'adult', 'imdb_id', 'original_language', 'original_title', 'overview', 'popularity', 'release_date', 'runtime', 'tagline', 'vote_average', 'vote_count', 'id']
    column_names = ['Genre', 'imdbID', 'Language', 'Title', 'Released']
    url = "http://www.omdbapi.com/?i=tt3445408&apikey=2651b0db"
    response = requests.get(url=url)


    path = "./data/dataset.csv"
    df = pd.read_csv(path)
    print(df.head(10))
    df2 = pd.json_normalize(response.json())

    
recommend(input)