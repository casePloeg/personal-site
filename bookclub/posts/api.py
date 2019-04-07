from posts.models import Posts
from rest_framework import viewsets, permissions
from .serializers import PostsSerializer

# Lead Viewset


class PostsViewSet(viewsets.ModelViewSet):

    # queryset = Posts.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = PostsSerializer

    queryset = Posts.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
