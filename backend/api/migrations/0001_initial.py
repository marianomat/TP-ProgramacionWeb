# Generated by Django 3.2.9 on 2021-11-02 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Turnos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hour', models.DateTimeField()),
                ('description', models.TextField()),
                ('is_payed', models.BooleanField()),
                ('patient_name', models.TextField()),
                ('patient_lastName', models.TextField()),
                ('patient_phone', models.IntegerField()),
                ('patient_email', models.TextField()),
            ],
        ),
    ]
