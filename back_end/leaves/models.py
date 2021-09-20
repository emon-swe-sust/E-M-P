from django.db import models

class Leave(models.Model):

    employee = models.ForeignKey('employees.Employee', on_delete=models.CASCADE)
    casual = models.IntegerField(default=0, blank=False)
    sick = models.IntegerField(default=0, blank=False)
    others = models.IntegerField(default=0, blank=False)

    def __str__(self):
        return self.employee
