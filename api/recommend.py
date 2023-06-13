import pandas as pd
import requests
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

input={"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"}

def get_plot(input):
    imdbID = pd.json_normalize(input)['imdbID']
    url = "http://www.omdbapi.com/?i=" + str(imdbID[0]) + "&apikey=2651b0db"
    response = requests.get(url=url)
    df = pd.json_normalize(response.json())
    plot = df[['Title', 'Plot']]
    plot.columns = ['title', 'overview']
    return plot

path = "./data/dataset2.csv"
df = pd.read_csv(path)
df = df[['title', 'imdb_id', 'overview']]

df['overview'] = df['overview'].fillna('')
df2 = pd.concat([df, get_plot(input)], ignore_index=True)

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(df2['overview'])
tfidf_matrix.shape

cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
indices = pd.Series(df2.index, index=df2['title']).drop_duplicates()

def get_recommendations(title, cosine_sim=cosine_sim):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:3]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    return df['imdb_id'].iloc[movie_indices].values.tolist()