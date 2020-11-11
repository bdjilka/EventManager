FROM python:3.6-slim


RUN apt update
RUN apt install python3-dev -y
RUN apt install gcc -y
RUN apt install build-essential -y
RUN mkdir -p /opt/src
RUN apt install ssh -y
RUN apt install python3-cffi libcairo2 libpango1.0-0 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info -y

WORKDIR /opt/src

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN pip install daphne

RUN mkdir -p /var/www/static

COPY . .
COPY ./docker-entrypoint.sh /usr/local/bin/

WORKDIR /opt/static

EXPOSE 80

ENTRYPOINT ["docker-entrypoint.sh"]