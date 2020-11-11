from django.db import models


class Event(models.Model):
    """ Класс мероприятия """
    title = models.CharField(
        verbose_name='Название',
        max_length=300
    )
    start = models.DateTimeField(
        verbose_name='Начало'
    )
    end = models.DateTimeField(
        verbose_name='Окончание'
    )
    last_update = models.DateTimeField(
        verbose_name='Последнее обновление',
        auto_now=True
    )
    color = models.CharField(
        verbose_name='Цвет',
        max_length=15,
        default='blue'
    )
    # В Django 3.1 появилась поддержка JSONField, поэтому попробуем вместо django.contrib.postgres.fields.JSONField
    information = models.JSONField(
        verbose_name='Информация',
        default=list,
        blank=True,
    )
