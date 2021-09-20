from django.urls import path

from .views import (
    TeamListCreate,
    TeamUpdateDelete
)

urlpatterns = [
    path('list_create/', TeamListCreate.as_view(), name="team-list-create"),
    path('update_delete/<str:team_pk>/', TeamUpdateDelete.as_view(), name="team-update-delete")
]
