from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),

    # 🔐 LOGIN JWT
    path('api/login/', TokenObtainPairView.as_view(), name='login'),
    path('api/refresh/', TokenRefreshView.as_view(), name='refresh'),

    # 📦 APPS
    path('api/users/', include('users.urls')),        # 👈 mejor así
    path('api/clientes/', include('clientes.urls')),
    path('api/presupuesto/', include('presupuesto.urls')),  # 🔥 NUEVO
    path('api/empleados/', include('empleado.urls')),
]