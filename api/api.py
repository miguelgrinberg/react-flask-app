import time
import requests
from flask import Flask
from recommend import recommend

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/movies/<searchValue>')
def get_movies(searchValue):
    url = "http://www.omdbapi.com/?s=" + str(searchValue) + "&apikey=263d22d8"
    response = requests.get(url=url)
    return response.json()

@app.route('/movies/recommend/<favouriteMovies>')
def get_recommendation(favouriteMovies):
    recommendation = recommend(favouriteMovies)
    return recommendation
     