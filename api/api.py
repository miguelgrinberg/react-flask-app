import requests
import json
#import pandas as pd

from flask import Flask, request

app = Flask(__name__, static_folder='../build', static_url_path='/')

seed = "test_user_statistics_project"

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')

"""
params
category (str): "age", "gender", "last_name", 
group_by (str): "country", "state", "total" don't think this is needed
"""


@app.route('/api/get_user_statistics', methods=['GET'])
def get_user_statistics():
    args = request.args
    category = args.get('category')
    group_by = args.get('group_by')
    response = requests.get("https://randomuser.me/api/?results=10&seed={}".format(seed))
    users = response.json().get("results")
    print(users)
    statistics = calculate_statistics(users)
    return json.dumps(statistics)


def calculate_statistics(users, category=None, group_by=None):
    countries_to_users = {}
    us_states_to_users = {}
    for user in users:
        user_location = user.get("location", {})
        user_country = user_location.get("country", "")
        countries_to_users.setdefault(user_country, []).append(user)
        if user_country == "United States":
            us_states_to_users.setdefault(user_location.get("state", ""), []).append(user)
    most_populated_countries = dict(sorted(countries_to_users.items(), key=lambda x: len(x[1]))[:5])
    most_populated_us_states = dict(sorted(us_states_to_users.items(), key=lambda x: len(x[1]))[:5])
    return {'most_populated_countries': most_populated_countries, 'most_populated_us_states': most_populated_us_states}

def calculate_age_distribution(users):
    bins = [16, 25, 45, 65, 85, 150]
    labels = ['under 16', '16-25', '26-45', '46-65', '66-85', 'over 85']

