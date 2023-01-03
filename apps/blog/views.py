from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import PostSerializer, PostListSerializer

# Busqueda
from django.db.models.query_utils import Q

# Modelos
from .models import Post, ViewCount
from apps.category.models import Category

# Paginación
from .pagination import *

class BlogListView(APIView):
    permissions_classes = (permissions.AllowAny,)

    def get(self, request, format=None):

        if Post.postobjects.all().exists():
            
            posts = Post.postobjects.all()
            paginatior = SmallSetPagination()
            results = paginatior.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginatior.get_paginated_response({'posts':serializer.data})
        else:
            return Response({'error':'no posts found'}, status = status.HTTP_404_NOT_FOUND)


class ListPostByCategoryView(APIView):
    permissions_classes = (permissions.AllowAny,)

    def get(self, request, format=None):

        if Post.postobjects.all().exists():
            category_slug = request.query_params.get('category_slug')
            
            category = Category.objects.get(slug= category_slug)
            posts = Post.postobjects.all()


            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                categories = Category.objects.filter(parent=category)
                filtered_categories = [category]

                for cat in categories:
                    filtered_categories.append(cat)
                
                filtered_categories = tuple(filtered_categories)

                posts = posts.filter(category__in = filtered_categories)

            paginatior = SmallSetPagination()
            results = paginatior.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginatior.get_paginated_response({'posts':serializer.data})
        else:
            return Response({'error':'no posts found'}, status = status.HTTP_404_NOT_FOUND)


class PostDetailView(APIView):
    permissions_classes = (permissions.AllowAny,)
    def get(self, requst, slug, format=None):
        
        if Post.postobjects.filter(slug=slug).exists():

            post = Post.postobjects.get(slug=slug)
            serialiser = PostSerializer(post)

            address = requst.META.get('HTTP_X_FOWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = requst.META.get('REMOTE_ADDR')
            
            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()
            return Response({'post':serialiser.data}, status = status.HTTP_200_OK)
        else:
            return Response({'error':'no post found'}, status = status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    permissions_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__name__icontains=search_term)
            )

        paginatior = SmallSetPagination()
        results = paginatior.paginate_queryset(matches, request)

        serializer = PostListSerializer(results, many=True)
        return paginatior.get_paginated_response({'filtered_posts':serializer.data})

