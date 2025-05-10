import math
from rest_framework import serializers
from .models import Excavator, ExcavatorPosition

class ExcavatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excavator
        fields = ['id', 'name', 'code']


class ExcavatorPositionSerializer(serializers.ModelSerializer):
    excavator = ExcavatorSerializer(read_only=True)

    class Meta:
        model = ExcavatorPosition
        fields = [
            'id',
            'excavator',
            'timestamp',
            'latitude',
            'longitude',
            'altitude',
            'satellites',
            'fix_quality',
        ]

    def to_representation(self, instance):
            """
            Get the standard representation dict, then sanitize any float 'nan' or 'inf'
            by replacing it with None.
            """
            data = super().to_representation(instance)
            for key, val in data.items():
                if isinstance(val, float):
                    # Replace NaN, +Inf, -Inf with None
                    if not math.isfinite(val):
                        data[key] = None
            
            return data
