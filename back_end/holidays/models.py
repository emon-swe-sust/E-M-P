from django.db import models

class Holiday(models.Model):

    name = models.CharField(max_length=100, null=True, blank=False, unique=True)
    details = models.CharField(max_length=100, null=True, blank=False, unique=True)
    start_date = models.CharField(max_length=100, null=True, blank=False, unique=True)
    end_date = models.CharField(max_length=100, null=True, blank=False, unique=True)
    holiday_type = models.CharField(max_length=100, null=True, blank=False, unique=True)
    year = models.CharField(max_length=100, null=True, blank=False, unique=True)

    def __str__(self):
        return self.name
