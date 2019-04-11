from mailgun_email.models import BookclubMailingList
from rest_framework import viewsets, permissions, mixins
from .serializers import BookclubMailingListSerializer

# only allow creation


class BookclubMailingListViewSet(mixins.CreateModelMixin,   viewsets.GenericViewSet):

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BookclubMailingListSerializer
