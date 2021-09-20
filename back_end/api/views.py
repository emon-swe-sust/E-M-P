from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def apiOverview(request):
    api_urls = {
        'API Overview'                      : 'api/v1/',

        'User Login'                        : 'api/v1/accounts/login/',
        'User Logout'                       : 'api/v1/accounts/logout/',
        'User Details'                      : 'api/v1/accounts/user/',
        'User Registration'                 : 'api/v1/accounts/registration/',

        'Team List, Create'                 : 'api/v1/teams/list_create/',
        'Team Update Delete'                : 'api/v1/teams/update_delete/<str:team_pk>/',

        'Employee Create'                   : 'api/v1/employees/create/',
# Employee Create json data format
# {
#     "name": "a",
#     "gender": "a",
#     "date_of_birth": "a",
#     "email": "a@a.com",
#     "role": "a",
#     "status": "a",
#     "joining_date": "a",
#     "designation": "a",
#     "phone_no": "a",
#     "team": 1,
#     "jobhistory_set": [{"company_name": "a", "designation": "a", "duration": "a"}]
# }
        'Employee List'                     : 'api/v1/employees/list/',
        'Employee Leave List'               : 'api/v1/employees/leave_list/',
        'Employee Update, Delete, Details'  : 'api/v1/employees/update_delete_details/<str:employee_pk>/',

        'Leaves List, Create'               : 'api/v1/leaves/list_create',

        'Project Create'                    : 'api/v1/projects/create/',
        'Project List'                      : 'api/v1/projects/list/',
        'Project Update Delete'             : 'api/v1/projects/update_delete/<str:project_pk>/',

        'Holiday List, Create'              : 'api/v1/holidays/list_create',
        'Holiday Update Delete'             : 'api/v1/holidays/update_delete/<str:holiday_pk>/'
	}

    return Response(api_urls)
    