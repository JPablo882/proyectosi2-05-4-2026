import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginCliente.css";

export default function LoginCliente() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login cliente:", email, password);
    // aquí luego conectas con Django
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Acceso Cliente</h2>
        <p>Ingresa a tu cuenta</p>

        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Iniciar Sesión
        </button>

        <p>
          ¿No tienes cuenta?{" "}
          <span onClick={() => navigate("/registro")}>
            Regístrate aquí
          </span>
        </p>
      </div>
    </div>
  );
}