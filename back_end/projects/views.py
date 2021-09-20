from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateDestroyAPIView
)

from .serializers import (
    ProjectCreateSerializer,
    ProjectListSerializer
)
from .models import Project

class ProjectCreate(CreateAPIView):

    serializer_class = ProjectCreateSerializer
    queryset = Project.objects.all()

class ProjectList(ListAPIView):

    serializer_class = ProjectListSerializer
    queryset = Project.objects.all()

class ProjectUpdateDelete(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = 'project_pk'

    serializer_class = ProjectListSerializer
    
    def get_queryset(self):
        return Project.objects.filter(id=self.kwargs["project_pk"])
