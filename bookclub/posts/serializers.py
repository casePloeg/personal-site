from rest_framework import serializers
from posts.models import Posts, Comments

# Posts Serializer


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'


class PostLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'title', 'created_at']


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['name', 'body', 'created_at', 'post', 'email']
        write_only = ['email']
        extra_kwargs = {
            'email': {'write_only': True},
            'post': {'write_only': True},

        }
