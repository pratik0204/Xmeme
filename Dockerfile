#Python and Linux Version
FROM python:3.8.3-slim-buster

COPY requirements.txt /app/requirements.txt

#Configure server

RUN set -ex \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt

#Working directory
WORKDIR /app
ADD . .
RUN python manage.py collectstatic --noinput
RUN python manage.py makemigrations
RUN python manage.py migrate


CMD gunicorn config.wsgi:application --bind 0.0.0.0:8081
