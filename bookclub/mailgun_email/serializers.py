from rest_framework import serializers
from mailgun_email.models import BookclubMailingList


class BookclubMailingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookclubMailingList
        fields = '__all__'
        extra_kwargs = {
            'email': {'write_only': True},
            'subscribed': {'write_only': True},
        }
