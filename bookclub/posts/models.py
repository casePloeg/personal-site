from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.conf import settings
import requests

# Create your models here.


class Posts(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Posts"

    def send_simple_message(self, title):
        return requests.post(
            "https://api.mailgun.net/v3/mail.caseploeg.com/messages",
            auth=("api", settings.MAILGUN_ACCESS_KEY),
            data={"from": "Case Ploeg <bookclub@" + "mail.caseploeg.com" + ">",
                  "to": [settings.MAILGUN_BOOKCLUB_LIST],
                  "subject": "New Post",
                  "text": "Hey! I just uploaded a new post called " + title + "  at https://caseploeg.com/blog. Check it out and let me know what you think.\n\nYours,\nCase"})

    def save(self, *args, **kwargs):
        # send out email to bookclub mailing list on new post
        if self.pk is None:
            print(self.send_simple_message(self.title))
        super().save(*args, **kwargs)


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
