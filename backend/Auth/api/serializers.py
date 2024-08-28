from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers





User= get_user_model()

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['role'] = user.role

        return token
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model           = User
        fields          = ['id','email','password','role']
        extra_kwargs    = {"password":{"write_only":True}}

    def create(self, validated_data):
        user            = User.objects.create_user(**validated_data)
        return user