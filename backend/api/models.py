from django.db import models


# Para modificar la BD, primero modificamos este archivo. Luego creamos la migracion con el comando
# python manage.py makemigrations
# Una vez creada la migracion, la ejecutamos con el comando y modificamos la estructura de la BD
# python manage.py migrate

# Create your models here.
class Turno(models.Model):
    # Falta poner las condiciones dentro de los parentesis como los max_length, etc. Cuando modifiquemos esto va a
    # aparecer el error del video https://www.youtube.com/watch?v=SSbmewgBZQc&list=PLquoPC3ciXW_Yih1lwIrnDxyE0ZdsU4lr
    # &index=27
    is_taken =  is_payed = models.BooleanField(blank=True, null=True, default=False)
    hour = models.DateTimeField(blank=False, null=False)
    description = models.TextField(blank=True, null=True, default="--")
    is_payed = models.BooleanField(blank=True, null=True, default=False)
    doctor = models.TextField(blank=True, default="test")
    patient_name = models.TextField(blank=True, null=True, default="TURNO")
    patient_lastName = models.TextField(blank=True, null=True, default="DISPONIBLE")
    patient_phone = models.TextField(blank=True, default="--")


