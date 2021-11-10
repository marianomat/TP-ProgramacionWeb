from django.http import HttpResponse
from rest_framework import generics, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Turno
from api.serializers import TurnoSerializer, MeSerializer

# ModelViewSet crea el ABM de la entidad
from api.serializers import RegisterSerializer


class TurnoViewSet(viewsets.ModelViewSet):
    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()  # Se pueden filtrar con los metodos


# CreateAPIView solo crea la parte de CREATE del ABM
# Solo necesitamos una sola ruta POST para crear un usuario
# El queryset no hace falta ya que solo es necesario para rutas que hay que indicar un conjunto de datos con los que trabaje
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


# Otra manera de crear rutas.heredar de clases creadas por Django, sino con funciones
# Recibe como parametro request

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 202)
