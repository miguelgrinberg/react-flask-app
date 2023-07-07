import requests

def get_movies_by_id(searchValue):
    url = "http://www.omdbapi.com/?i=" + str(searchValue) + "&apikey=2651b0db"
    response = requests.get(url=url)
    return response.json()