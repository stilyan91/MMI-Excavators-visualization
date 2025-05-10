from django.urls import path
from .views import ExcavatorLocationsListAPIView

urlpatterns = [
    path('excavator-locations/', ExcavatorLocationsListAPIView.as_view(), name='excavator-locations'),
]