from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

from django.conf import settings
import requests

import mailgun_email.mailgun as mail

class Posts(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Posts"

    def delete(self):
        # remove this post's mailing list upon deletion
        mail.remove_list(self.pk)
        super().delete()

    def save(self, *args, **kwargs):
        # send out email to bookclub mailing list on new post
        # create maillist for the new post's comments
        if self.pk is None:
            super().save(*args, **kwargs)
            # create mailing list for this specific post
            mail.create_mailing_list(id=self.pk)
            # add author to the post's mailing list
            mail.add_list_member(id=self.pk, address="case.ploeg@gmail.com")
            # send message to mailing list 
            mail.send_simple_message(subject="New Post", text="Hey! I just uploaded a new post called " + self.title + " at https://caseploeg.com/blog. Check it out and let me know what you think.\n\nYours,\nCase", list=settings.MAILGUN_BOOKCLUB_LIST)
        else:
            super().save(*args, **kwargs)


class Comments(models.Model):
    name = models.CharField(max_length=200)
    body = models.TextField()
    email = models.EmailField(max_length=254, blank=True)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    post = models.ForeignKey('Posts', on_delete=models.CASCADE)
    approved = models.BooleanField(default=True)

    def __str__(self):
        return self.name + " - " + self.body[:20] + " ..."

    class Meta:
        verbose_name_plural = "Comments"

    def save(self, *args, **kwargs):
        # send email to post subscribers when there is a new comment
        if self.pk is None:
            super().save(*args, **kwargs)
            # if the user didn't provide an email address, notify everyone (public)
            if(self.email == ""):

                mail.send_simple_message(subject="New Comment on " + str(self.post),
                text=self.name + " says:\n" + self.body + "\n See more at https://caseploeg.com/blog/" + str(self.post.id),
                list=str(self.post.id)+ "@mail.caseploeg.com")
            else:
                # send the message directly to me
                mail.send_simple_message(subject="New Direct Message on " + str(self.post),
                text=self.name + " @ " + self.email + " says:\n" + self.body,
                list="case.ploeg@gmail.com")
        else:
            super().save(*args, **kwargs)
