from django.contrib.auth.models import User
from future import absolute_import, unicode_literals
from django.core.management.base import BaseCommand

import os


class Command(BaseCommand):
    help = 'Initialization of project. Ave cesar.'

    @staticmethod
    def _create_superuser():
        """
        Creation of super user.
        """
        try:
            User.objects.get(is_superuser=True)
        except User.DoesNotExist:
            login = os.getenv('SUPERUSER_NAME', 'admin')
            password = os.getenv('SUPERUSER_PASSWORD', 'passw0rd')
            User.objects.create_superuser(username=login, password=password, email='')

    def handle(self, *args, **options):
        self._create_superuser()