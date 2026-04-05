import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">

      {/* 🔥 SIDEBAR SIEMPRE */}
      <Sidebar />

      {/* 🔥 CONTENIDO CAMBIANTE */}
      <div className="contenido">
        <Outlet />
      </div>

    </div>
  );
}