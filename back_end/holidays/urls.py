from django.urls import path

from .views import (
    HolidayListCreate,
    HolidayUpdateDelete
)

urlpatterns = [
    path('list_create/', HolidayListCreate.as_view(), name="holiday-list-create"),
    path('update_delete/<str:holiday_pk>/', HolidayUpdateDelete.as_view(), name="holiday-update-delete")
]
