from rest_framework.generics import (
    ListCreateAPIView
)

from .serializers import (
    LeaveSerializer
)
from .models import Leave

class LeaveListCreate(ListCreateAPIView):

    serializer_class = LeaveSerializer
    queryset = Leave.objects.all()
