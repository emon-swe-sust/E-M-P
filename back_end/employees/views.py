from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView
)

from .serializers import (
    EmployeeCreateSerializer,
    EmployeeListSerializer,
    EmployeeLeaveListSerializer,
    EmployeeUpdateDeleteDetailsSerializer
)
from .models import Employee

class EmployeeCreate(CreateAPIView):

    serializer_class = EmployeeCreateSerializer

    
class EmployeeList(ListAPIView):

    serializer_class = EmployeeListSerializer
    queryset = Employee.objects.all()

class EmployeeLeaveList(ListAPIView):

    serializer_class = EmployeeLeaveListSerializer
    queryset = Employee.objects.all()

class EmployeeUpdateDeleteDetails(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = 'employee_pk'

    serializer_class = EmployeeUpdateDeleteDetailsSerializer
    
    def get_queryset(self):
        return Employee.objects.filter(id=self.kwargs["employee_pk"]).distinct()

