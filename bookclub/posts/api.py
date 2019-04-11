from posts.models import Posts, Comments
from rest_framework import viewsets, permissions, mixins
from .serializers import PostsSerializer, PostLinksSerializer, CommentsSerializer

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


# doesn't allow deletes
class CommentsViewSet(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):

    # queryset = Posts.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CommentsSerializer

    def get_queryset(self):
        """
        Optionally restricts the of post returned by filtering for a number
        """
        # in reversed order
        queryset = Comments.objects.all().order_by('created_at')
        post = self.request.query_params.get('post', None)

        if post is not None:
            queryset = queryset.filter(post=post)
        return queryset
