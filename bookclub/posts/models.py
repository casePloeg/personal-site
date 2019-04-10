from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.


class Posts(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Posts"


class Comments(models.Model):
    name = models.CharField(max_length=200)
    body = models.TextField()
    email = models.EmailField(max_length=254, blank=True)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    post = models.ForeignKey('Posts', on_delete=models.CASCADE)

    def __str__(self):
        return self.name + " - " + self.body[:20] + " ..."

    class Meta:
        verbose_name_plural = "Comments"
