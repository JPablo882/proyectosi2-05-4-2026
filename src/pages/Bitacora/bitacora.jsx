import { useEffect, useState } from "react";
import "./Bitacora.css";

export default function Bitacora() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/bitacora/")
      .then(res => res.json())
      .then(data => setLogs(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bitacora-container">
      <h1 className="titulo">Bitácora del Sistema 🔐</h1>
      <p className="subtitle">Registro de accesos y actividades</p>

      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Acción</th>
              <th>Fecha y Hora</th>
            </tr>
          </thead>

          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td colSpan="3" className="empty">
                  No hay registros
                </td>
              </tr>
            ) : (
              logs.map((log) => (
                <tr key={log.id}>
                  <td>{log.usuario_nombre}</td>
                  <td>{log.accion}</td>
                  <td>
                    {new Date(log.fecha_hora).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}