import time
import requests
from flask import Flask

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

@app.route('/movies/<searchValue>/<year>')
def get_movies_by_year(searchValue, year):
    url = "https://www.omdbapi.com/?s=" + str(searchValue) + "&y=" + str(year) + "&apikey=263d22d8"
    response = requests.get(url=url)
    return response.json()
