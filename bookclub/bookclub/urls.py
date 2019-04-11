"""bookclub URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# from django.urls import path, include


from django.urls import include, path, re_path
from django.views.generic.base import TemplateView
from django.conf import settings
# ratelimited backend protects against DDOS
from ratelimitbackend import admin
from rest_framework import routers

# potentially redirect everything back to front end, downside is actual 404 error is not raised, react-router just catches it
urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('posts.urls')),
    path('', include('mailgun_email.urls')),
    path('', include('accounts.urls')),
    path('admin', admin.site.urls),
]
