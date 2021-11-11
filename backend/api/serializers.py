from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Turno


# Traduce el objeto a json
class TurnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turno
        fields = "__all__"  # Se indican lo fields que quiero incluir en el serializer


class RegisterSerializer(serializers.ModelSerializer):
    # Esto hace que no se envie la password encriptada en el response body, solo lo tiene en cuenta al momento de recibir
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "password" , "last_name","email", "first_name"]

    # Hay que overridear el metodo del create para que guarde la password encriptada
    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            # El metodo create_user crea el usuario con la password encriptada
            username=validated_data['username'],
            last_name=validated_data['last_name'],
            first_name=validated_data['first_name'],
            email=validated_data['email'],
            password=validated_data['password']
            # Validated_date diccionario con los fields de la request
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"