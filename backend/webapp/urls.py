from django.urls import path, include
from webapp.views import EventView, LikeDislikeView, UploadUserEventlView, UserLikedEventView, UserCreatedEventView

urlpatterns = [
    path('events/', EventView.as_view(), name=''),
    path('like-dislike/<str:userid>/<str:eventid>/', LikeDislikeView.as_view(), name=''),
    path('uploadevent/', UploadUserEventlView.as_view(), name=''),


    path('userlikedevents/', UserLikedEventView.as_view(), name=''),
    path('userevents/', UserCreatedEventView.as_view(), name=''),
]