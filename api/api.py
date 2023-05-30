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


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/movies')
def get_movies():
    url = "http://www.omdbapi.com/?s=avengers&apikey=263d22d8"
    response = requests.get(url=url)
    return response.json()
