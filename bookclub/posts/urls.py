from rest_framework import routers
from .api import PostsViewSet

router = routers.DefaultRouter()
router.register('api/posts', PostsViewSet, 'posts')

urlpatterns = router.urls
