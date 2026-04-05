from django.contrib import admin
from .models import Usuario, Rol

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "rol", "is_staff")

    def has_delete_permission(self, request, obj=None):
        # ❌ no permitir borrar a pablo
        if obj and obj.username == "pablo":
            return False
        return True