from django.db import models

class Team(models.Model):

    name = models.CharField(max_length=100, null=True, blank=False, unique=True)
    floor = models.CharField(max_length=7, null=True, blank=False)
    room = models.CharField(max_length=7, null=True, blank=False)
    is_active = models.CharField(max_length=10, null=True, blank=False)

    def __str__(self):
        return self.name
