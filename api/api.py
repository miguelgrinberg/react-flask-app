import time
import urllib

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
    print(response.json())
    return response.json()

@app.route('/movies/imdbID/<searchValue>')
def get_movies_by_id(searchValue):
    url = "http://www.omdbapi.com/?i=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    return response.json()

@app.route('/movies/recommend/<searchValue>')
def get_recommendation(searchValue):
    b = get_recommendations(searchValue)
    response = []
    for id in b:
        print(id)
        response.append(get_movies_by_id(id))
    print(response)
    return response;
get_recommendation("tt0110357")