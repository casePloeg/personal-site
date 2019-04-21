from rest_framework import routers
from .api import BookclubMailingListViewSet
from django.urls import path, re_path


router = routers.DefaultRouter()
router.register('api/clubmail', BookclubMailingListViewSet, 'clubmail')

urlpatterns = router.urls
