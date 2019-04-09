from rest_framework import serializers
from posts.models import Posts

# Posts Serializer


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'


class PostLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'title', 'created_at']
