from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import authentication
from rest_framework.permissions import AllowAny

from .serializers import RegisterSerializer



# Create your views here
class RegisterUserApiView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
            