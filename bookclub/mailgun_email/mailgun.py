from django.conf import settings
import requests

def send_simple_message(subject, text, list):
    return requests.post(
        "https://api.mailgun.net/v3/mail.caseploeg.com/messages",
        auth=("api", settings.MAILGUN_ACCESS_KEY),
        data={"from": "Case Ploeg <noreply@mail.caseploeg.com>",
                "to": [list],
                "subject": subject,
                "text": text})

    
def create_mailing_list(id):
    return requests.post(
        "https://api.mailgun.net/v3/lists",
         auth=('api', settings.MAILGUN_ACCESS_KEY),
        data={'address': str(id) +"@mail.caseploeg.com",
                'description': "Post " + str(id)  + " Subscription list"})

def add_list_member(id, address):
    return requests.post(
        "https://api.mailgun.net/v3/lists/" + str(id) + "@mail.caseploeg.com/members",
        auth=('api', settings.MAILGUN_ACCESS_KEY),
        data={'subscribed': True,
                'address': address,
                })

def remove_list(id):
    return requests.delete(
        "https://api.mailgun.net/v3/lists/"+str(id)+"@mail.caseploeg.com",
        auth=('api', settings.MAILGUN_ACCESS_KEY))