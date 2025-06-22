import requests
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

API_KEY = ""

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/movies/<searchValue>')
def get_movies(searchValue):
    url = "http://www.omdbapi.com/?s=" + str(searchValue) + "&apikey=" + API_KEY
    response = requests.get(url=url)
    return response.json()

@app.route('/movies/imdbID/<searchValue>')
def get_movies_by_id(searchValue):
    url = "http://www.omdbapi.com/?i=" + str(searchValue) + "&apikey=" + API_KEY
    response = requests.get(url=url)
    return response.json()

@app.route('/movie/<imdbID>')
def get_movie_details(imdbID):
    url = "http://www.omdbapi.com/?i=" + str(imdbID) + "&plot=full&apikey=" + API_KEY
    response = requests.get(url=url)
    return response.json()
