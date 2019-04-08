from rest_framework import routers
from .api import PostsViewSet, PostIdsViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostsViewSet, 'posts')
router.register('api/postids', PostIdsViewSet, 'posts')

urlpatterns = router.urls
