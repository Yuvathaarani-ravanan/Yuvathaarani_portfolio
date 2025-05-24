# yuvathaarani_portfolio/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('portfolio.urls')),  # This looks for portfolio/urls.py
]
