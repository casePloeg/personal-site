from posts.models import Posts
from rest_framework import viewsets, permissions
from .serializers import PostsSerializer, PostLinksSerializer

# Lead Viewset


class PostsViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = PostsSerializer

    def get_queryset(self):
        """
        Optionally restricts the of post returned by filtering for a number
        """
        # in reversed order
        queryset = Posts.objects.all().order_by('-created_at')
        numPosts = self.request.query_params.get('num', None)

        # if the param given is a number, splice by that amount
        if numPosts is not None and numPosts.isdigit():
            queryset = queryset[:int(numPosts)]
        return queryset


class PostLinksViewSet(viewsets.ModelViewSet):

    # queryset = Posts.objects.all()
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    serializer_class = PostLinksSerializer

    queryset = Posts.objects.all().order_by('created_at')
