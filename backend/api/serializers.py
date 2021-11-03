from rest_framework import serializers

from api.models import Turno


# Traduce el objeto a json
class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = "__all__" # Se indican lo fields que quiero incluir en el serializer
