# Generated by Django 2.2 on 2019-04-20 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0009_auto_20190410_0053'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='approved',
            field=models.BooleanField(default=True),
        ),
    ]
