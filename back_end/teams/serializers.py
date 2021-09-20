from rest_framework import serializers
from .models import Team

class TeamSerializer(serializers.ModelSerializer):

    member_count = serializers.SerializerMethodField()

    def get_member_count(self, obj):
        return obj.employee_set.count()

    class Meta:
        model = Team
        fields = ['id', 'name', 'floor', 'room', 'member_count', 'is_active']

# class TeamUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Team
#         fields = '__all__'

# class TeamListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Team
#         fields = '__all__'
   