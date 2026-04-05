from rest_framework import viewsets
from .models import Presupuesto
from .serializers import PresupuestoSerializer

class PresupuestoViewSet(viewsets.ModelViewSet):
    queryset = Presupuesto.objects.all()
    serializer_class = PresupuestoSerializer