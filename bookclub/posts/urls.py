from rest_framework import routers
from .api import PostsViewSet, PostLinksViewSet, CommentsViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostsViewSet, 'posts')
router.register('api/postlinks', PostLinksViewSet, 'posts')
router.register('api/comments', CommentsViewSet, 'posts')
urlpatterns = router.urls
