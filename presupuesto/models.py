from django.db import models
from users.models import Usuario  # 👈 IMPORTANTE (ajusta si tu app se llama diferente)

class Presupuesto(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True, blank=True)

    metros = models.FloatField()
    habitaciones = models.IntegerField()
    banos = models.IntegerField()
    material = models.CharField(max_length=50)

    total = models.FloatField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Presupuesto #{self.id} - {self.total}"