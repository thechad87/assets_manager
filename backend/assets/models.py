from django.db import models

# Create your models here.

class Asset(models.Model):
    name = models.CharField(max_length=255)
    assigned = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    serial = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    depreciation = models.CharField(max_length=100)
    image = models.URLField(max_length=500)

    def __str__(self):
        return self.name
