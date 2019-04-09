from rest_framework import routers
from .api import PostsViewSet, PostLinksViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostsViewSet, 'posts')
router.register('api/postlinks', PostLinksViewSet, 'posts')

urlpatterns = router.urls
