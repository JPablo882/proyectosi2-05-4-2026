from django.db import models

class Empleado(models.Model):

    ROLES = [
        ('Ingeniero Civil', 'Ingeniero Civil'),
        ('Arquitecta', 'Arquitecta'),
        ('Maestro Albañil', 'Maestro Albañil'),
        ('Ayudante General', 'Ayudante General'),
        ('Electricista', 'Electricista'),
        ('Plomera', 'Plomera'),
        ('Pintor', 'Pintor'),
        ('Supervisora de Obra', 'Supervisora de Obra'),
    ]

    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    fecha_contrato = models.DateField()
    correo = models.EmailField()
    rol = models.CharField(max_length=100, choices=ROLES)

    def __str__(self):
        return f"{self.nombre} {self.apellido} - {self.rol}"