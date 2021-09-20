from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView
)

from .serializers import (
    HolidaySerializer
)
from .models import Holiday

class HolidayListCreate(ListCreateAPIView):

    serializer_class = HolidaySerializer
    queryset = Holiday.objects.all()


class HolidayUpdateDelete(RetrieveUpdateDestroyAPIView):

    lookup_url_kwarg = 'holiday_pk'

    serializer_class = HolidaySerializer
    
    def get_queryset(self):
        return Holiday.objects.filter(id=self.kwargs["holiday_pk"])
