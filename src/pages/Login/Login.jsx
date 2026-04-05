import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import logo from "../../assets/login1.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.access);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        
        {/* 🔥 LOGO */}
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>

        <h2>Panel Administrativo</h2>
        <p className="subtitle">ConstructPro - Backoffice</p>

        <label>Usuario</label>
        <input
          type="text"
          placeholder="admin"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}