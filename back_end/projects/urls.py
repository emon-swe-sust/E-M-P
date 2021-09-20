from django.urls import path

from .views import (
    ProjectCreate,
    ProjectList,
    ProjectUpdateDelete
)

urlpatterns = [
    path('create/', ProjectCreate.as_view(), name="project-create"),
    path('list/', ProjectList.as_view(), name="project-list"),
    path('update_delete/<str:project_pk>/', ProjectUpdateDelete.as_view(), name="project-update-delete")
]
