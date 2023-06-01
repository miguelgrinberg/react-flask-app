This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A Flask-based API backend was added in the `api/` directory.

## Development
This project requires Python, NPM, and Yarn. Set up a python virtual environment:
```
python -m venv venv
```
Activate the virtual environment:
```
source venv/bin/activate
```
Install the required python modules:
```
pip install -r api/requirements.txt
```
Set up a proxy to redirect frontend requests to the Flask backend in package.json. You can find the address the Flask app is running on in the next section:
```
{
  ...
  "proxy": "http://localhost:5000"
}
```
Start the frontend React app:
```
yarn start
```
Start the backend Flask app:
```
yarn start-api
```
