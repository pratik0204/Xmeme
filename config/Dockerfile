#Python and Linux Version
FROM python:3.10.0a1-alpine3.12

COPY requirements.txt /app/requirements.txt

#Configure server

RUN set -ex \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt \
    && python manage.py makemigrations

#Working directory
WORKDIR /app

ADD . .

CMD gunicorn config.wsgi:application --bind 0.0.0.0:$PORT