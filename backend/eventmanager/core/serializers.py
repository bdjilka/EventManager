from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    """ Сериализатор для мероприятий """

    class Meta:
        model = Event
        fields = ['id', 'title', 'start', 'end', 'last_update', 'color', 'information']


class EventPostPatchSerializer(serializers.ModelSerializer):
    """ Сериализатор для создания мероприятий """

    class Meta:
        model = Event
        fields = ['title', 'start', 'end', 'color', 'information']
