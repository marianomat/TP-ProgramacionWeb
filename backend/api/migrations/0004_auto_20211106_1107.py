# Generated by Django 3.2.9 on 2021-11-06 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_turno_doctor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='turno',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='doctor',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='hour',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='is_payed',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='patient_email',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='patient_lastName',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='patient_name',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='turno',
            name='patient_phone',
            field=models.IntegerField(blank=True),
        ),
    ]
