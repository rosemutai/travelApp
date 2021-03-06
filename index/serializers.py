import imp
from tokenize import Token
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework.validators import UniqueValidator, ValidationError

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import Profile
# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         # add custom claims
#         token['username'] = user.username
#         return token


class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(
        required=True,
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
        return value

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

class ProfileSerialzer(serializers.ModelSerializer):
    following= serializers.IntegerField(read_only=True)
    followers= serializers.IntegerField(read_only=True)
    class Meta:
        model = Profile
        field = ('bio', 'profile_pic', 'followers', 'following', 'birth_date' )

    def update_profile(self, instance, validated_data):
        instance.bio = validated_data.get('bio', instance.bio)
        instance.profile_pic = validated_data.get('profile_pic', instance.profile_pic)
        instance.birth_date = validated_data.get('birth_date', instance.birth_date)
        instance.save()
        return instance
    

    

