from django.urls import path, re_path
from . import views

# add in routes handled by react router
urlpatterns = [
    path('', views.index),
    re_path(r'blog', views.index)
]
