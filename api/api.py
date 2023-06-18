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
    url = "http://www.omdbapi.com/?s=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    print(response.json())
    return response.json()

@app.route('/movies/imdbID/<searchValue>')
def get_movies_by_id(searchValue):
    url = "http://www.omdbapi.com/?i=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    return response.json()