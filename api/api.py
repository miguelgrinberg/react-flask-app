import time
import requests
from flask import Flask, request
from recommend import get_recommendations

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/movies/<searchValue>')
def get_movies(searchValue):
    url = "http://www.omdbapi.com/?s=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    return response.json()

@app.route('/movies/imdbID/<searchValue>')
def get_movies_by_id(searchValue):
    url = "http://www.omdbapi.com/?i=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    return response.json()

@app.route('/movies/recommend', methods=['POST', 'GET'])
def get_recommendation():
    b = get_recommendations('Star Wars: Episode IV - A New Hope')
    # req = request.json
    response = []
    a = {"Response":"True","Search":[{"Poster":"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg","Title":"Star Wars: Episode IV - A New Hope","Type":"movie","Year":"1977","imdbID":"tt0076759"},{"Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Title":"Star Wars: Episode V - The Empire Strikes Back","Type":"movie","Year":"1980","imdbID":"tt0080684"},{"Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Title":"Star Wars: Episode VI - Return of the Jedi","Type":"movie","Year":"1983","imdbID":"tt0086190"},{"Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg","Title":"Star Wars: Episode VII - The Force Awakens","Type":"movie","Year":"2015","imdbID":"tt2488496"},{"Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Title":"Star Wars: Episode I - The Phantom Menace","Type":"movie","Year":"1999","imdbID":"tt0120915"},{"Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg","Title":"Star Wars: Episode III - Revenge of the Sith","Type":"movie","Year":"2005","imdbID":"tt0121766"},{"Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg","Title":"Star Wars: Episode II - Attack of the Clones","Type":"movie","Year":"2002","imdbID":"tt0121765"},{"Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg","Title":"Rogue One: A Star Wars Story","Type":"movie","Year":"2016","imdbID":"tt3748528"},{"Poster":"https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg","Title":"Star Wars: Episode VIII - The Last Jedi","Type":"movie","Year":"2017","imdbID":"tt2527336"},{"Poster":"https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg","Title":"Star Trek","Type":"movie","Year":"2009","imdbID":"tt0796366"}],"totalResults":"4281"}
    for id in b:
        print(id)
        response.append(get_movies_by_id(id))
    # return req
    return response;
