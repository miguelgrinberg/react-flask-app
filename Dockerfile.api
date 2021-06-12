# This Dockerfile builds the API only.

FROM python:3.9
WORKDIR /app

COPY api/requirements.txt api/api.py api/.flaskenv ./
RUN pip install -r ./requirements.txt
ENV FLASK_ENV production

EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "api:app"]
