# Generated by Django 4.1.5 on 2023-08-03 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='event_name',
            field=models.CharField(max_length=225),
        ),
    ]
