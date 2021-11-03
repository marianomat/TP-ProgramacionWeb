from django.urls import path, include
from rest_framework import routers

from api.views import TurnoViewSet

router = routers.DefaultRouter()
router.register("turnos", TurnoViewSet)

urlpatterns = [
    path("", include(router.urls))
]
