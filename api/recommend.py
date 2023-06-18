import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import api


def get_dataset():
    path = "./data/dataset2.csv"
    df = pd.read_csv(path)
    df = df[['title', 'imdb_id', 'overview']]
    df['overview'] = df['overview'].fillna('')
    return df

def add_plot(imdbID):

    # Use the get_dataset() function we created earlier
    dataset = get_dataset()

    # Use the api.get_movies_by_id() to get the movie details for the given IMDB ID
    response = api.get_movies_by_id(imdbID)
    response = pd.json_normalize(response)

    # Get columns 'Title', 'imdbID', 'Plot' from the response
    response = response[['Title', 'imdbID', 'Plot']]

    # Change column names to be 'title', 'imdb_id', 'overview'
    response.columns = ['title', 'imdb_id', 'overview']

    # Add the favourited movie details to the dataset
    output = pd.concat([dataset, response], ignore_index=True)

    # Remove the duplicate IMDB IDs from the dataset
    output.drop_duplicates(subset=['imdb_id'], inplace=True)

    return output

def get_recommendations(imdbID):
    df = add_plot(imdbID)
    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(df['overview'])

    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    indices = pd.Series(df.index, index=df['imdb_id'])
    idx = indices[imdbID]
    # Get the pairwise similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:3]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]
    print(movie_indices)

    # Return the top 2 most similar movies
    return df['imdb_id'].iloc[movie_indices].values.tolist()

# def get_plot(input):
#     response = api.get_movies_by_id(input)
#     df = pd.json_normalize(response)
#     plot = df[['Title', 'imdbID', 'Plot']]
#     plot.columns = ['title', 'imdb_id', 'overview']
#     return plot
#
# def get_recommendations(imdb_id):
#     # Get the index of the movie that matches the title
#
#     path = "./data/dataset2.csv"
#     df = pd.read_csv(path)
#     df = df[['title', 'imdb_id', 'overview']]
#
#     df['overview'] = df['overview'].fillna('')
#     df2 = pd.concat([df, get_plot(imdb_id)], ignore_index=True)
#
#     tfidf = TfidfVectorizer(stop_words='english')
#     tfidf_matrix = tfidf.fit_transform(df2['overview'])
#     tfidf_matrix.shape
#
#     cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
#     indices = pd.Series(df2.index, index=df2['imdb_id']).drop_duplicates()
#     idx = indices[imdb_id]
#
#     # Get the pairwsie similarity scores of all movies with that movie
#     sim_scores = list(enumerate(cosine_sim[idx]))
#
#     # Sort the movies based on the similarity scores
#     sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
#
#     # Get the scores of the 10 most similar movies
#     sim_scores = sim_scores[1:3]
#
#     # Get the movie indices
#     movie_indices = [i[0] for i in sim_scores]
#
#     # Return the top 10 most similar movies
#     return df['imdb_id'].iloc[movie_indices].values.tolist()