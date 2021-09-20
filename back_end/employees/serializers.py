from rest_framework import serializers
from .models import Employee#, JobHistory
from leaves.models import Leave
from django.db.models import Sum

class EmployeeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

# class JobHistorySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = JobHistory
#         fields = ['company_name', 'designation', 'duration']

# class EmployeeCreateSerializer(serializers.ModelSerializer):

#     jobhistory_set = JobHistorySerializer(many=True)

#     class Meta:
#         model = Employee
#         fields = ['name', 'gender', 'date_of_birth', 'email', 'role', 'status', 'joining_date', 'designation', 'phone_no', 'team', 'jobhistory_set']#, 'leave_set']

#     def create(self, validated_data):

#         jobhistories_data = validated_data.pop('jobhistory_set')
#         employee = Employee.objects.create(**validated_data)

#         for jobhistory_data in jobhistories_data:
#             JobHistory.objects.create(employee=employee, **jobhistory_data)

#         return employee


class EmployeeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name']

class EmployeeLeaveListSerializer(serializers.ModelSerializer):

    casual_count = serializers.SerializerMethodField()
    sick_count = serializers.SerializerMethodField()
    others_count = serializers.SerializerMethodField()

    def get_casual_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('casual'))["casual__sum"] or 0)

    def get_sick_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('sick'))["sick__sum"] or 0)

    def get_others_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('others'))["others__sum"] or 0)

    class Meta:
        model = Employee
        fields = ['id', 'name', 'casual_count', 'sick_count', 'others_count']

class EmployeeUpdateDeleteDetailsSerializer(serializers.ModelSerializer):

    casual_count = serializers.SerializerMethodField()
    sick_count = serializers.SerializerMethodField()
    others_count = serializers.SerializerMethodField()

    team = serializers.StringRelatedField()

    def get_casual_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('casual'))["casual__sum"] or 0)

    def get_sick_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('sick'))["sick__sum"] or 0)

    def get_others_count(self, obj):
        return (Leave.objects.filter(employee_id=obj.id).aggregate(Sum('others'))["others__sum"] or 0)

    class Meta:
        model = Employee
        fields = ['name', 'gender', 'date_of_birth', 'email', 'role', 'status', 'joining_date', 'designation', 'phone_no', 'team', 'casual_count', 'sick_count', 'others_count']#, 'leave_set']
