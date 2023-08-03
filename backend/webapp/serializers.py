from rest_framework import serializers
from webapp.models import Events
from account.models import MyUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id','email']

class EventSerializer(serializers.ModelSerializer):
    creator = UserSerializer()
    is_liked = UserSerializer(many=True)
    class Meta:
        model = Events
        fields = '__all__'

