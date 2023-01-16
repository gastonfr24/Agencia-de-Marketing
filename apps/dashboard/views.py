# Django Rest Framework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from django.db.models import Sum
from django.db.models import Count
from datetime import datetime
from collections import defaultdict


from .permissions import IsPostAuthorOrReadOnly, AuthorPermission

# Models
from apps.blog.models import Post, AllVisitCount, ViewCount
from apps.blog.serializers import PostDashSerializer


class DashboardView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]
    
    def get(self, request, format=None):

        if self.request.user.is_authenticated:
            user = self.request.user
            
            if Post.objects.filter(author=user).exists():
                posts = Post.objects.filter(author=user).order_by('-views')[:5]
                serializer = PostDashSerializer(posts, many=True)
                post_count = Post.objects.filter(author=user).count()
                month_posts = ViewCount.objects.filter(created__year=datetime.now().year).count()
                day_posts = ViewCount.objects.filter(created__month=datetime.now().month).count()

                return Response({'bests_posts':serializer.data,'total_posts':{datetime.now().year:post_count}, 'month_posts':{datetime.now().year:month_posts}, 'day_posts':{datetime.now().month:day_posts} }, status = status.HTTP_200_OK)
            else:
                return Response({'error':'no post found'}, status = status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error':'no tienes permisos'}, status = status.HTTP_404_NOT_FOUND)


class VisitCountByMonth(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, format=None):
        if self.request.user.is_authenticated:
            
            
            
            visits = AllVisitCount.objects.all()
            total_visits_by_month = {}
            
            for visit in visits:
                month = visit.created.strftime("%B")
                if month in total_visits_by_month:
                    total_visits_by_month[month] += 1
                else:
                    total_visits_by_month[month] = 1
            
            total_visits_by_month_new = []

            for month, visits in total_visits_by_month.items():
                total_visits_by_month_new.append({ 'mes': month, 'visits': visits })

            month_visits = AllVisitCount.objects.filter(created__year=datetime.now().year).count()
            
            return Response({'total_views_time':total_visits_by_month_new,'visits_time': month_visits} , status=status.HTTP_200_OK)
        else:
            return Response({'error':'no tienes permisos'}, status = status.HTTP_404_NOT_FOUND)


class VisitsByDayView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, format=None):
        if self.request.user.is_authenticated:
            visits = AllVisitCount.objects.filter(created__month=datetime.now().month)
            visits_by_day = defaultdict(int)
            for visit in visits:
                day = visit.created.date().day
                visits_by_day[day] += 1
                
            day_views = AllVisitCount.objects.filter(created__month=datetime.now().month).aggregate(Count('id'))['id__count']
            
            return Response({'total_views_time':visits_by_day, 'visits_time': day_views}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'no tienes permisos'}, status = status.HTTP_404_NOT_FOUND)



class IpAdressView(APIView):
    permission_classes = (IsPostAuthorOrReadOnly, )
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, format=None):
        if self.request.user.is_authenticated:




            return Response({}, status=status.HTTP_200_OK)
        else:
            return Response({'error':'no tienes permisos'}, status = status.HTTP_404_NOT_FOUND)