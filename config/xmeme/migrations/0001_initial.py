# Generated by Django 3.1.6 on 2021-02-07 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Meme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=100)),
                ('caption', models.CharField(max_length=100)),
                ('url', models.URLField()),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
