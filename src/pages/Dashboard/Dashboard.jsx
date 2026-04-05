import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="main">

      <div className="header">
        <h1>Dashboard</h1>

        <div className="user" onClick={() => setOpen(!open)}>
          👤 <span>Admin</span>

          {open && (
            <div className="dropdown">
              <button onClick={logout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>

      <div className="stats">
        <div className="stat-card green">
          <h3>$850,000</h3>
          <p>Ventas del mes</p>
        </div>

        <div className="stat-card blue">
          <h3>23</h3>
          <p>Proyectos activos</p>
        </div>

        <div className="stat-card purple">
          <h3>47</h3>
          <p>Oportunidades</p>
        </div>

        <div className="stat-card orange">
          <h3>5</h3>
          <p>Alertas</p>
        </div>
      </div>

      
      

    </div>
  );
}