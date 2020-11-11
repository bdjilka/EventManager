from django.contrib import admin
from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'start', 'end', 'last_update')
    ordering = ('id', 'start', 'end', 'last_update')

    empty_value_display = '---'
