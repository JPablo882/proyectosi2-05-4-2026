import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🌐 Público
import Home from "./pages/Home/Home";
import Presupuesto from "./pages/Presupuesto/Presupuesto";

// 🔐 Admin
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Usuarios from "./pages/Usuarios/Usuarios";
import RRHH from "./pages/RRHH/RRHH";
import Bitacora from "./pages/Bitacora/bitacora";

// 👤 Cliente
import LoginCliente from "./pages/LoginCliente/LoginCliente";
import Registro from "./pages/Registro/Registro";

// 🧩 Layout
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 LANDING */}
        <Route path="/" element={<Home />} />

        {/* 📄 PÚBLICO */}
        <Route path="/presupuesto" element={<Presupuesto />} />

        {/* 🔐 LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 🔥 ADMIN SIN PROTECCIÓN (TEMPORAL) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/rrhh" element={<RRHH />} />
        </Route>

        {/* 👤 CLIENTE */}
        <Route path="/login-cliente" element={<LoginCliente />} />
        <Route path="/registro" element={<Registro />} />

        {/* 🚫 404 */}
        <Route path="*" element={<Navigate to="/" />} />
        
        <Route path="/bitacora" element={<Bitacora />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;