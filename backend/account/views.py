from account.renderers import UserRenderer
from rest_framework.response import Response
from rest_framework import status


# for class base view
from rest_framework.views import APIView

# simple jwt auth
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate

from account.serializers import UserRegistrationSerializer, UserLoginSerializer
from account.models import MyUser


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# ----------------user signup--------------------

class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        res = {'msg':'User signup success'}
        return Response(res, status=status.HTTP_200_OK)

# ----------------user login--------------------

class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        if MyUser.objects.filter(email=email).exists():
            check_user = MyUser.objects.get(email=email)
            if check_user.is_active == False:
                res = {
                        'errors':{
                            'non_field_errors':['Email is not verified']
                            }
                        }
                return Response(res, status=status.HTTP_400_BAD_REQUEST)
            user = authenticate(email=email, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                res = {
                        'token':token,
                        'msg':'login success',
                        'idd':user.id
                        }
                return Response(res, status=status.HTTP_201_CREATED) 
            else:
                res = {
                        'errors':{
                            'non_field_errors':['Email or Password is not Valid']
                            }
                        }
                return Response(res, status=status.HTTP_400_BAD_REQUEST)
        else:
            res = {
                    'errors':{
                            'non_field_errors':['Email or Password is not Valid']
                            }
                        }
            return Response(res, status=status.HTTP_400_BAD_REQUEST)

