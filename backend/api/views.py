from rest_framework import viewsets

from api.models import Turno
from api.serializers import TurnoSerializer


class TurnoViewSet(viewsets.ModelViewSet):
    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()  # Se pueden filtrar con los metodos
