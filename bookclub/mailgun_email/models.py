from django.db import models
from django.conf import settings
import requests
# Create your models here.


class BookclubMailingList(models.Model):
    email = models.EmailField(max_length=254, blank=True, unique=True)
    subscribed = models.BooleanField(default=True)

    def __str__(self):
        return self.email

    def add_list_member(self, email):
        return requests.post(
            "https://api.mailgun.net/v3/lists/"+ settings.MAILGUN_BOOKCLUB_LIST+ "/members",
            auth=('api', settings.MAILGUN_ACCESS_KEY),
            data={'subscribed': True,
                  'address': email,
                  })

    def save(self, *args, **kwargs):
        # send out email to bookclub mailing list on new post
        self.add_list_member(self.email)
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Email"
