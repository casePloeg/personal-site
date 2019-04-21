from rest_framework import routers
from .api import PostsViewSet, PostLinksViewSet, CommentsViewSet, CreateCommentViewSet
from django.urls import path, re_path



router = routers.DefaultRouter()
router.register('api/posts', PostsViewSet, 'posts')
router.register('api/postlinks', PostLinksViewSet, 'posts')
router.register('api/comments', CommentsViewSet, 'posts')
router.register('api/postcomment', CreateCommentViewSet, 'posts')


urlpatterns = router.urls 
