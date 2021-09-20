from rest_framework import serializers
from .models import Project

class ProjectCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'

class ProjectListSerializer(serializers.ModelSerializer):

    team = serializers.StringRelatedField()

    class Meta:
        model = Project
        fields = '__all__'
        