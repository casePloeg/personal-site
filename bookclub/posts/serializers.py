from rest_framework import serializers
from posts.models import Posts

# Posts Serializer


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'


class PostIdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'created_at']
