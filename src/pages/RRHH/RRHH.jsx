import { useState, useEffect } from "react";
import axios from "axios";
import "./RRHH.css";

export default function RRHH() {

  // 📌 ESTADOS
  const [empleados, setEmpleados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [rolSeleccionado, setRolSeleccionado] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    fecha_contrato: "",
    correo: "",
    rol: ""
  });

  // 📡 OBTENER EMPLEADOS (VERSIÓN SEGURA)
  const obtenerEmpleados = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/empleados/empleados/");

      console.log("DATA API:", res.data);

      // 🔥 SOPORTA ambos formatos (lista o paginado)
      if (Array.isArray(res.data)) {
        setEmpleados(res.data);
      } else if (res.data.results) {
        setEmpleados(res.data.results);
      } else {
        setEmpleados([]);
      }

    } catch (error) {
      console.error("ERROR:", error);
      setEmpleados([]);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  // ✏️ INPUTS
  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value
    });
  };

  // 🚀 CREAR EMPLEADO
  const formatearFecha = (fecha) => {
  if (!fecha) return "";

  // Si viene en formato dd/mm/yyyy → convertir
  if (fecha.includes("/")) {
    const [dia, mes, anio] = fecha.split("/");
    return `${anio}-${mes}-${dia}`;
  }

  // Si ya viene bien → devolver igual
  return fecha;
};

const crearEmpleado = async () => {
  try {

    const datos = {
      ...empleado,
      fecha_nacimiento: formatearFecha(empleado.fecha_nacimiento),
      fecha_contrato: formatearFecha(empleado.fecha_contrato),
    };

    console.log("ENVIANDO:", datos);

    await axios.post("http://127.0.0.1:8000/api/empleados/empleados/", datos);

    setMostrarModal(false);
    obtenerEmpleados();

    setEmpleado({
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
      fecha_contrato: "",
      correo: "",
      rol: ""
    });

    alert("Empleado registrado correctamente ✅");

  } catch (error) {
    console.error("ERROR BACKEND:", error.response?.data);
    alert("Error al registrar empleado ❌");
  }
};

  // 🔎 FILTRO
  const empleadosFiltrados = (empleados || []).filter((emp) => {
  const texto = busqueda.toLowerCase();

  const nombreCompleto = `${emp?.nombre} ${emp?.apellido}`.toLowerCase();

  return (
    nombreCompleto.includes(texto) &&
    (rolSeleccionado === "Todos" || emp?.rol === rolSeleccionado)
  );
});

  // 📊 CONTADORES
  const total = empleados.length;

  const profesionales = empleados.filter(
    (e) => e.rol === "Ingeniero Civil" || e.rol === "Arquitecta"
  ).length;

  const tecnicos = total - profesionales;

  return (
    <div className="rrhh-container">
      <h1>Recursos Humanos</h1>
      <p className="subtitle">Gestión de personal y asignaciones</p>

      {/* 📊 CARDS */}
      <div className="cards">
        <div className="card">Personal Total <h2>{total}</h2></div>
        <div className="card">Personal Activo <h2 className="verde">{total}</h2></div>
        <div className="card">Profesionales <h2>{profesionales}</h2></div>
        <div className="card">Técnicos/Obreros <h2>{tecnicos}</h2></div>
      </div>

      {/* 🔍 BARRA */}
      <div className="barra">
        <input
    className="buscador"
    placeholder="Buscar por nombre o rol..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />

        <select onChange={(e) => setRolSeleccionado(e.target.value)}>
          <option value="Todos">Todos los roles</option>
          <option value="Ingeniero Civil">Ingeniero Civil</option>
          <option value="Arquitecta">Arquitecta</option>
          <option value="Maestro Albañil">Maestro Albañil</option>
          <option value="Ayudante General">Ayudante General</option>
          <option value="Electricista">Electricista</option>
          <option value="Plomera">Plomera</option>
          <option value="Pintor">Pintor</option>
          <option value="Supervisora de Obra">Supervisora de Obra</option>
        </select>

        <button className="btn-azul" onClick={() => setMostrarModal(true)}>
          + Nuevo Empleado
        </button>
      </div>

      {/* 📋 LISTA */}
      <div className="lista">
        {empleadosFiltrados.length > 0 ? (
          empleadosFiltrados.map((emp) => (
            <div key={emp.id} className="empleado">
              <div className="emp-header">
                <h3>{emp.nombre} {emp.apellido}</h3>
                <span className="badge azul">{emp.rol}</span>
              </div>

              <div className="emp-info">
                <span>✉️ {emp.correo}</span>
                <span>📅 Contrato: {emp.fecha_contrato}</span>
              </div>

              <div className="emp-footer">
                <button className="btn">Ver Perfil</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No hay empleados</p>
        )}
      </div>

      {/* 🪟 MODAL */}
      {mostrarModal && (
  <div className="modal">
    <div className="modal-content">
      <h2 className="titulo-modal">Registrar Empleado</h2>

      <div className="form-grid">

        <div className="campo">
          <label>Nombre</label>
          <input name="nombre" placeholder="Ej: Juan" onChange={handleChange} />
        </div>

        <div className="campo">
          <label>Apellido</label>
          <input name="apellido" placeholder="Ej: Pérez" onChange={handleChange} />
        </div>

        <label>Fecha de Nacimiento</label>
<input
  type="date"
  name="fecha_nacimiento"
  value={empleado.fecha_nacimiento}
  onChange={handleChange}
/>

<label>Fecha de Contrato</label>
<input
  type="date"
  name="fecha_contrato"
  value={empleado.fecha_contrato}
  onChange={handleChange}
/>

        <div className="campo full">
          <label>Correo</label>
          <input name="correo" placeholder="correo@empresa.com" onChange={handleChange} />
        </div>

        <div className="campo full">
          <label>Rol</label>
          <select name="rol" onChange={handleChange}>
            <option value="">Seleccione rol</option>
            <option value="Ingeniero Civil">Ingeniero Civil</option>
            <option value="Arquitecta">Arquitecta</option>
            <option value="Maestro Albañil">Maestro Albañil</option>
            <option value="Ayudante General">Ayudante General</option>
            <option value="Electricista">Electricista</option>
            <option value="Plomera">Plomera</option>
            <option value="Pintor">Pintor</option>
            <option value="Supervisora de Obra">Supervisora de Obra</option>
          </select>
        </div>

      </div>

      <div className="acciones">
        <button className="btn-guardar" onClick={crearEmpleado}>
          Guardar
        </button>
        <button className="btn-cancelar" onClick={() => setMostrarModal(false)}>
          Cancelar
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}