from django.db import models

# Create your models here.

class Excavator(models.Model):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name + '-' + self.code
    
    
class ExcavatorPosition(models.Model):
    excavator = models.ForeignKey(Excavator, on_delete=models.CASCADE, related_name='positions')
    timestamp = models.DateTimeField()
    latitude_deg = models.FloatField()
    latitude_min = models.FloatField()
    longitude_deg = models.FloatField()
    longitude_min = models.FloatField()
    altitude = models.FloatField()
    satellites = models.IntegerField()
    fix_quality = models.IntegerField()
    
    
    def __str__(self):
        return f"{self.excavator.name}-{self.excavator.code} @ {self.timestamp}"
    
    @property
    def latitude(self):
        return self.latitude_deg + self.latitude_min / 60
    
    @property
    def longitude(self):
        return self.longitude_deg + self.longitude_min / 60