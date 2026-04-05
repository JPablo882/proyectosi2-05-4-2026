from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.contrib.auth import get_user_model

User = get_user_model()

@receiver(post_migrate)
def crear_usuario_por_defecto(sender, **kwargs):
    if not User.objects.filter(username="pablo").exists():
        User.objects.create_superuser(
            username="pablo",
            email="pablo@admin.com",
            password="pablo123"
        )
        print("✅ Usuario pablo creado automáticamente")