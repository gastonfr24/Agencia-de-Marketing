from django.urls import path
from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view()),
    path('search', SearchBlogView.as_view()),

    path('author-bloglist', AuthorBlogListView.as_view()),
    path('update', UpdateBlogPostView.as_view()),
    path('create', CreateBlogPostView.as_view()),
    path('delete/<slug>', DeleteBlogPostView.as_view()),
    path('draft', DraftBlogPostView.as_view()),
    path('published', PublishBlogPostView.as_view()),
    path('author-detail/<slug>', PostAuthorDetailView.as_view()),
]
