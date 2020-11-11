#!/bin/sh
set -e
cd /opt/src

if [ "$1" = 'service' ]; then
  python manage.py collectstatic --no-input
  python manage.py migrate
  python manage.py init

elif [ "$1" = 'dev' ]; then
  python manage.py collectstatic --no-input
  python manage.py migrate
  python manage.py init
  python manage.py runserver 0.0.0.0:80

fi