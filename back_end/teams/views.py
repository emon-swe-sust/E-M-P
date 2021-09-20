from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView
)

from .serializers import (
    TeamSerializer
)
from .models import Team

class TeamListCreate(ListCreateAPIView):

    serializer_class = TeamSerializer
    queryset = Team.objects.all()

    
class TeamUpdateDelete(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = 'team_pk'

    serializer_class = TeamSerializer
    
    def get_queryset(self):
        return Team.objects.filter(id=self.kwargs["team_pk"])
