import csv
from django.core.management.base import BaseCommand
from django.utils.timezone import make_aware
from datetime import datetime

from server.models import Excavator, ExcavatorPosition

class Command(BaseCommand):
    help = "Load GPS data from .dat files"
    
    def add_arguments(self, parser):
        parser.add_argument('filepath', type=str, help='Path to the .dat files') 
        parser.add_argument('--excavator', type=int, required=True, help='Excavator number')
        
    def handle(self, *args, **kwargs):
        filepath = kwargs['filepath']
        excavator_number = kwargs['excavator']
        
        excavator, _ = Excavator.objects.get_or_create(code=excavator_number)
        
        with open(filepath, newline='') as f:
            reader = csv.reader(f)
            rows = list(reader)
            
        data_rows = rows[4:]
        
        positions = []
        for row in data_rows:
            try:
                
                timestamp = datetime.strptime(row[0], "%Y-%m-%d %H:%M:%S")
                timestamp = make_aware(timestamp)
                
                lat_deg = float(row[2])
                lat_min = float(row[3])
                lon_deg = float(row[4])
                lon_min = float(row[5])
                altitude = float(row[6])
                satellites = float(row[7])
                fix_quality = float(row[8])
                
                lat = lat_deg + lat_min / 60
                lon = lon_deg + lon_min / 60
                
                pos = ExcavatorPosition(
                    excavator=excavator,
                    timestamp=timestamp,
                    latitude_deg=lat_deg,
                    latitude_min=lat_min,
                    longitude_deg=lon_deg,
                    longitude_min=lon_min,
                    altitude=altitude,
                    satellites=satellites,
                    fix_quality=fix_quality
                )
                
                positions.append(pos)
            except (ValueError, IndexError):
                continue
            
        
        ExcavatorPosition.objects.bulk_create(positions, batch_size=500)
        self.stdout.write(self.style.SUCCESS(f'Imported {len(positions)} positions for Excavator #{excavator_number}'))