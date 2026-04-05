from rest_framework import serializers
from users.models import Usuario
from .models import Cliente

class RegistroClienteSerializer(serializers.Serializer):
    nombre_completo = serializers.CharField()
    telefono = serializers.CharField()
    direccion = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    confirm = serializers.CharField(write_only=True)

    def validate(self, data):
        if data['password'] != data['confirm']:
            raise serializers.ValidationError("Las contraseñas no coinciden")
        return data

    def create(self, validated_data):
        email = validated_data['email']
        password = validated_data['password']

        # 🔹 Crear usuario
        usuario = Usuario.objects.create_user(
            username=email,
            email=email,
            password=password
        )

        # 🔹 Crear cliente
        cliente = Cliente.objects.create(
            usuario=usuario,
            nombre_completo=validated_data['nombre_completo'],
            telefono=validated_data['telefono'],
            direccion=validated_data['direccion']
        )

        return cliente