from django.urls import path

from .views import (
    LeaveListCreate
)

urlpatterns = [
    path('list_create/', LeaveListCreate.as_view(), name="leave-list-create")
]
