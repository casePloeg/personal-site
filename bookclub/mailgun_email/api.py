from mailgun_email.models import BookclubMailingList
from rest_framework import permissions, mixins, viewsets
from .serializers import BookclubMailingListSerializer

# only allow creation

# specify throttle limit specifically for creation
class BookclubMailingListViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    throttle_scope = 'clubmail'
    serializer_class = BookclubMailingListSerializer