import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Registro.css";

export default function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    email: "",
    password: "",
    confirm: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    try {
      // 🔥 VALIDACIONES
      if (!form.nombre || !form.email || !form.password) {
        alert("Completa los campos obligatorios");
        return;
      }

      if (form.password !== form.confirm) {
        alert("Las contraseñas no coinciden");
        return;
      }

      // 🔥 PETICIÓN AL BACKEND
      const response = await axios.post(
        "http://127.0.0.1:8000/api/clientes/registro/",
        {
          nombre_completo: form.nombre,
          telefono: form.telefono,
          direccion: form.direccion,
          email: form.email,
          password: form.password,
          confirm: form.confirm,
        }
      );

      console.log(response.data);

      alert("Cuenta creada correctamente 🔥");

      navigate("/login-cliente");

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert("Error: " + JSON.stringify(error.response.data));
      } else {
        alert("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Crear Cuenta</h2>
        <p>Completa tus datos para registrarte</p>

        <div className="form-grid">
          
          <div>
            <label>Nombre Completo *</label>
            <input
              name="nombre"
              placeholder="Juan Pérez"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Teléfono *</label>
            <input
              name="telefono"
              placeholder="+591 70000000"
              onChange={handleChange}
            />
          </div>

          <div className="full">
            <label>Dirección *</label>
            <input
              name="direccion"
              placeholder="Calle, Número, Ciudad"
              onChange={handleChange}
            />
          </div>

          <div className="full">
            <label>Email *</label>
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Contraseña *</label>
            <input
              name="password"
              type="password"
              placeholder="********"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Confirmar Contraseña *</label>
            <input
              name="confirm"
              type="password"
              placeholder="********"
              onChange={handleChange}
            />
          </div>

        </div>

        <button onClick={handleRegister}>
          Crear Cuenta
        </button>

        <p style={{ marginTop: "15px" }}>
          ¿Ya tienes cuenta?{" "}
          <span onClick={() => navigate("/login-cliente")}>
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
}