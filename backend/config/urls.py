from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from eventmanager.core.views import EventViewSet


router = DefaultRouter()
router.register(r'events', EventViewSet, basename='events')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
