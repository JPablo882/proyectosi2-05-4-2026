import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>ConstructPro</h2>
      <p>Panel Administrativo</p>

      <nav>
        <NavLink to="/dashboard" className="item">Dashboard</NavLink>
        <NavLink to="/usuarios" className="item">Usuarios</NavLink>
        <NavLink to="/rrhh" className="item">RRHH</NavLink>
        <NavLink to="/proyectos" className="item">Proyectos</NavLink>
        <NavLink to="/reportes" className="item">Reportes</NavLink>
        <NavLink to="/bitacora" className="item">Bitácora</NavLink>
        
      </nav>
    </div>
  );
}