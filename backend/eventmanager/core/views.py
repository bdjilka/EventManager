from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer, EventPostPatchSerializer


class EventViewSet(viewsets.ModelViewSet):
    """ ViewSet для работы с мероприятиями """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
