from django.db import models

class Project(models.Model):

    name = models.CharField(max_length=100, null=True, blank=False, unique=True)
    team = models.ForeignKey('teams.Team', on_delete=models.CASCADE)
    client = models.CharField(max_length=30, null=True, blank=False)
    status = models.CharField(max_length=20, null=True, blank=False)

    def __str__(self):
        return self.name
