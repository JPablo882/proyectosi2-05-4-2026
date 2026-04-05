from .models import Bitacora

def registrar_bitacora(usuario, accion):
    Bitacora.objects.create(
        usuario=usuario,
        accion=accion
    )