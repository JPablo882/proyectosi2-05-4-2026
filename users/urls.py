from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, RolViewSet
from bitacora.views import BitacoraViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'roles', RolViewSet)
router.register('bitacora', BitacoraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]