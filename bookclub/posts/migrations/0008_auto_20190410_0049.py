# Generated by Django 2.2 on 2019-04-10 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_auto_20190410_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
