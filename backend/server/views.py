from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from .models import ExcavatorPosition
from .serializers import ExcavatorPositionSerializer


class ExcavatorLocationsListAPIView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ExcavatorPositionSerializer

    def get_queryset(self):
        code_param = self.request.query_params.get('excavator_code')
        if code_param:
            codes = [code_param]
        else:
            codes = ExcavatorPosition.objects.values_list(
                'excavator__code', flat=True
            ).distinct()

        id_list = []
        for code in codes:
            last_ids = (
                ExcavatorPosition.objects
                .filter(excavator__code=code)
                .order_by('-timestamp')
                .values_list('pk', flat=True)[:10]
            )
            id_list.extend(last_ids)

        qs = (ExcavatorPosition.objects
            .select_related('excavator')
            .filter(pk__in=id_list)
            .order_by('excavator__code', '-timestamp')
            )
        
        return qs

       