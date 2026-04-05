import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    username: "",
    email: "",
    password: "",
    rol: ""
  });

  // 🔥 CARGAR USUARIOS
  const cargarUsuarios = () => {
    fetch("http://127.0.0.1:8000/api/users/usuarios/")
      .then(res => res.json())
      .then(data => setUsuarios(data));
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // 🔥 MANEJAR INPUTS
  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 CREAR USUARIO
  const crearUsuario = () => {
    fetch("http://127.0.0.1:8000/api/users/usuarios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoUsuario)
    })
      .then(res => res.json())
      .then(() => {
        setMostrarModal(false);
        cargarUsuarios();
        setNuevoUsuario({
          username: "",
          email: "",
          password: "",
          rol: ""
        });
      })
      .catch(() => alert("Error al crear usuario"));
  };

  // 🔥 ✅ ELIMINAR USUARIO (AQUÍ ESTABA TU ERROR)
  const eliminarUsuario = (id) => {
    if (!window.confirm("¿Eliminar usuario?")) return;

    fetch(`http://127.0.0.1:8000/api/users/usuarios/${id}/`, {
      method: "DELETE"
    })
      .then(() => {
        cargarUsuarios(); // refresca lista
      })
      .catch(() => alert("Error al eliminar"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Usuarios 🔥</h1>

      <button onClick={() => setMostrarModal(true)}>
        + Nuevo Usuario
      </button>

      {/* LISTA */}
      {usuarios.map(u => (
        <div key={u.id} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f5f6f8",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px"
        }}>
          <span>{u.username} - {u.email}</span>

          <button
            onClick={() => eliminarUsuario(u.id)}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            🗑 Eliminar
          </button>
        </div>
      ))}

      {/* MODAL */}
      {mostrarModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "300px"
          }}>
            <h3>Crear Usuario</h3>

            <input name="username" placeholder="Usuario" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} />

            <button onClick={crearUsuario}>Guardar</button>
            <button onClick={() => setMostrarModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}