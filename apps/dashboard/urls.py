from django.urls import path
from .views import *

urlpatterns = [
    path('', DashboardView.as_view()),
    path('visits-day', VisitsByDayView.as_view()),
    path('visits-month', VisitCountByMonth.as_view()),
    
]
