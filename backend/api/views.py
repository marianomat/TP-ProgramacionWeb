from rest_framework import viewsets, generics

from api.models import Turno
from api.serializers import TurnoSerializer


# ModelViewSet crea el ABM de la entidad
from api.serializers import RegisterSerializer


class TurnoViewSet(viewsets.ModelViewSet):
    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()  # Se pueden filtrar con los metodos


# CreateAPIView solo crea la parte de CREATE del AMB
# Solo necesitamos una sola ruta POST para crear un usuario
# El queryset no hace falta ya que solo es necesario para rutas que hay que indicar un conjunto de datos con los que trabaje
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
