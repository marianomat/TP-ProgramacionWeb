from django.http import HttpResponse
from rest_framework import generics, viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import TurnoSerializer, MeSerializer
from api.serializers import RegisterSerializer
from api.serializers import PagoSerializer

from api.models import Turno
from api.models import Pago


class TurnoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TurnoSerializer
    queryset = Turno.objects.all()

    def perform_create(self, serializer):
        serializer.save(doctor_id=self.request.user.id)

    def get_queryset(self):
        return Turno.objects.filter(doctor_id=self.request.user.id)

    def delete_queryset(self):
        return Turno.objects.filter(doctor_id=self.request.user.id)

    def put_queryset(self):
        return Turno.objects.filter(doctor_id=self.request.user.id)

    def patch_queryset(self):
        return Turno.objects.filter(doctor_id=self.request.user.id)

# CreateAPIView solo crea la parte de CREATE del AMB
# Solo necesitamos una sola ruta POST para crear un usuario
# El queryset no hace falta ya que solo es necesario para rutas que hay que indicar un conjunto de datos con los que trabaje
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


class PagoViewSet(viewsets.ModelViewSet):
    serializer_class = PagoSerializer
    queryset = Pago.objects.all()

    def perform_create(self, serializer):
        serializer.save(doctor_id=self.request.user.id)


# Otra manera de crear rutas.heredar de clases creadas por Django, sino con funciones
# Recibe como parametro request

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)


@api_view(["GET"])
def turnos_disponibles(request):
    query_doctor_id = request.GET.get("doctor_id")
    turnos = Turno.objects.filter(is_taken=False, doctor_id=query_doctor_id)
    serializer = TurnoSerializer(turnos, many=True)
    return Response(serializer.data, 200)