from django.urls import path

from .views import (
    EmployeeCreate,
    EmployeeList,
    EmployeeLeaveList,
    EmployeeUpdateDeleteDetails
)

urlpatterns = [
    path('create/', EmployeeCreate.as_view(), name="employee-create"),
    path('list/', EmployeeList.as_view(), name="employee-list"),
    path('leave_list/', EmployeeLeaveList.as_view(), name="employee-leave-list"),
    path('update_delete_details/<str:employee_pk>/', EmployeeUpdateDeleteDetails.as_view(), name="employee-update-delete-details")
]
