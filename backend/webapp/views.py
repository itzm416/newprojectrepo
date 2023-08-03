from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from webapp.models import Events
from webapp.serializers import EventSerializer
# Create your views here.
from account.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from account.models import MyUser
from webapp.models import LOCATION_CHOICES

class EventView(APIView):
    def get(self, request, format=None):
        queryset = Events.objects.all()
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LikeDislikeView(APIView):
    renderer_classes = [UserRenderer]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def post(self, request, userid=None, eventid=None, format=None):
        event = Events.objects.get(id=int(eventid))
        user = MyUser.objects.get(id=request.user.id)

        if event.is_liked.filter(id=user.id).exists():
            event.is_liked.remove(user)
            res = {'msg':'likeremoved'}
            return Response(res, status=status.HTTP_200_OK)
        else:
            event.is_liked.add(user)
            res = {'msg':'liked'}
            return Response(res, status=status.HTTP_200_OK)


class UploadUserEventlView(APIView):
    renderer_classes = [UserRenderer]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def patch(self, request, format=None):
        serializer = EventSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        user = MyUser.objects.get(id=request.user.id)
        serializer.save(creator=user)
        res = {'msg':'Video Uploaded Successfully'}
        return Response(res, status=status.HTTP_200_OK)
    
    def get(self, request, format=None):
        states = LOCATION_CHOICES
        return Response({'status':'success','states':states}, status=status.HTTP_200_OK)


class UserCreatedEventView(APIView):
    renderer_classes = [UserRenderer]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = MyUser.objects.get(id=request.user.id)
        queryset = Events.objects.filter(creator=user)
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserLikedEventView(APIView):
    renderer_classes = [UserRenderer]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        user = MyUser.objects.get(id=request.user.id)
        queryset = Events.objects.filter(is_liked=user)
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


