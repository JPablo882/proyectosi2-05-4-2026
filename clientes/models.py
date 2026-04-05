from django.db import models
from users.models import Usuario

class Cliente(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)

    nombre_completo = models.CharField(max_length=150)
    telefono = models.CharField(max_length=20)
    direccion = models.TextField()

    def __str__(self):
        return self.nombre_completo