from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer
from apps.user.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    author = UserSerializer()
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
            'author'
        ]
class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        category = Category
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            #'content'
            'time_read',
            'published',
            'views',
            'category',
            'status'
        ]