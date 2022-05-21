import imp
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework import generics
from rest_framework.validators import UniqueValidator, ValidationError


class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        unique=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
        )
    password= serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email', 'password', 'password2')

    def validate(self, value):
        if value['password'] != value['password2']:
            raise ValidationError({"password": "Passwords must match!"})

    def create(self, validated_data):
        user = User.objects.create(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            username = validated_data['username'],
            email = validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
