from django.db import models

class Employee(models.Model):

    name = models.CharField(max_length=100, null=True, blank=False, unique=True)
    gender = models.CharField(max_length=15, null=True, blank=False)
    date_of_birth = models.CharField(max_length=20, null=True, blank=False)
    email = models.EmailField(max_length=50, null=True, blank=False)
    role = models.CharField(max_length=50, null=True, blank=False)
    status = models.CharField(max_length=30, null=True, blank=False)
    joining_date = models.CharField(max_length=20, null=True, blank=False)
    designation = models.CharField(max_length=40, null=True, blank=False)
    phone_no = models.CharField(max_length=11, null=True, blank=False)
    team = models.ForeignKey('teams.Team', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


# class JobHistory(models.Model):

#     employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
#     company_name = models.CharField(max_length=100, null=True, blank=False)
#     designation = models.CharField(max_length=40, null=True, blank=False)
#     duration = models.CharField(max_length=40, null=True, blank=False)

#     def __str__(self):
#         return self.company_name
