from django.urls import path, include
from .views import apiOverview

urlpatterns = [

    path('', apiOverview, name="api-overview"),

    path('accounts/', include('accounts.urls')),

    path('teams/', include('teams.urls')),

    path('employees/', include('employees.urls')),

    path('leaves/', include('leaves.urls')),

    path('projects/', include('projects.urls')),

    path('holidays/', include('holidays.urls'))

]