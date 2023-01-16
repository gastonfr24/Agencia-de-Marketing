from django.shortcuts import render
from .serializers import PostSerializer, PostListSerializer
from .permissions import IsPostAuthorOrReadOnly, AuthorPermission
from django.utils import timezone

# Django Rest Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser 
import requests


# Busqueda
from django.db.models.query_utils import Q

# Modelos
from .models import Post, ViewCount, AllVisitCount
from apps.category.models import Category

# Paginación
from .pagination import *

# Otros
from slugify import slugify

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
    def get(self, request, slug, format=None):
        
        if Post.postobjects.filter(slug=slug).exists():

            post = Post.postobjects.get(slug=slug)
            serializer = PostSerializer(post)

            address = request.META.get('HTTP_X_FOWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
            
            all_visits = AllVisitCount(ip_address=ip)
            all_visits.save()

            
            if not ViewCount.objects.filter(post=post, ip_address__ip_address=all_visits.ip_address):
                view = ViewCount(post=post, ip_address=all_visits, count= 1)
                try:
                    r = requests.get('https://freegeoip.app/json/8.8.8.8')
                    data = r.json()
                    view.country = data["country_name"]
                except:
                    pass
                view.save()
                post.views += 1
                post.save()
            else:
                view = ViewCount.objects.get(post=post, ip_address__ip_address=all_visits.ip_address)
                view.count += 1
                view.save()

            return Response({'post':serializer.data}, status = status.HTTP_200_OK)
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


# DashBoardView

class AuthorBlogListView(APIView):
    permissions_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):

        if self.request.user.is_authenticated:
            user = self.request.user

            if Post.objects.filter(author=user).exists():
                
                posts = Post.objects.filter(author=user)
                paginatior = SmallSetPagination()
                results = paginatior.paginate_queryset(posts, request)
                serializer = PostListSerializer(results, many=True)

                return paginatior.get_paginated_response({'posts':serializer.data})
            else:
                return Response({'error':'no posts found'}, status = status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error':'no authenticated'}, status = status.HTTP_404_NOT_FOUND)


class UpdateBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):

        user = self.request.user
        data = self.request.data

        post = Post.objects.get(slug=data['slug'])

        if data['title']:        
            if not data['title'] == 'undefined':
                post.title = data['title']

        if data['new_slug']:
            if not data['new_slug'] == 'undefined':
                post.slug = slugify(data['new_slug'])

        if data['description']:
            if not data['description'] == 'undefined':
                post.description = data['description']

        if data['content']:
            if not data['content'] == 'undefined':
                post.content = data['content']

        if data['time_read']:
            if not data['time_read'] == 'undefined':
                post.time_read = data['time_read']
     
        if data['category']:
            if not data['category'] == 'undefined':
                category_id = int(data['category'])
                category = Category.objects.get(id=category_id)
                post.category = category

        if data['thumbnail']:
            if not data['thumbnail'] == 'undefined':
                post.thumbnail = data['thumbnail']

        post.save()


        return Response({'success':'Post edited'})


class DraftBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):

        data = self.request.data

        post = Post.objects.get(slug=data['slug'])

        post.status = 'draft'
        post.save()


        return Response({'succes':'Post edited'})


class PublishBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def put(self, request, format=None):

        data = self.request.data

        post = Post.objects.get(slug=data['slug'])

        post.status = 'published'
        post.save()


        return Response({'succes':'Post edited'})


class PostAuthorDetailView(APIView):
    permissions_classes = (permissions.AllowAny,)
    def get(self, requst, slug, format=None):
        
        if Post.objects.filter(slug=slug).exists():

            post = Post.objects.get(slug=slug)
            serialiser = PostSerializer(post)

            address = requst.META.get('HTTP_X_FOWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = requst.META.get('REMOTE_ADDR')
            
            if not ViewCount.objects.filter(post=post, ip_address__ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()
            return Response({'post':serialiser.data}, status = status.HTTP_200_OK)
        else:
            return Response({'error':'no post found'}, status = status.HTTP_404_NOT_FOUND)


class DeleteBlogPostView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]
    def delete(self, request, slug, format=None):

        post = Post.objects.get(slug=slug)

        post.delete()


        return Response({'succes':'Post edited'})


class CreateBlogPostView(APIView):
    permission_classes = (AuthorPermission, )
    def post(self, request, format=None):
        user = self.request.user
        post = Post.objects.create(author=user)

        return Response({'slug': post.slug})
