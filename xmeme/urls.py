from django.urls import path
from .views import MemeAPIView, MemeDetail, MemeAPIView100

urlpatterns = [
    path('memes', MemeAPIView100.as_view()),
    path('memes/total/', MemeAPIView.as_view()),
    path('memes/<int:id>', MemeDetail.as_view()),
]
