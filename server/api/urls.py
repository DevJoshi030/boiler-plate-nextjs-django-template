from django.urls import path
from .views import HomeViewSet
urlpatterns = [
    path('home', HomeViewSet.as_view({
        'get': 'get'
    })),
]
