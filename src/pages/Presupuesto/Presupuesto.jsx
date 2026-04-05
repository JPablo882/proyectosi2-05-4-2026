import { useState } from "react";
import "./Presupuesto.css";

export default function Presupuesto() {
  const [metros, setMetros] = useState("");
  const [habitaciones, setHabitaciones] = useState(1);
  const [banos, setBanos] = useState(1);
  const [material, setMaterial] = useState("estandar");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    let precioBase = 300; // por m2

    if (material === "premium") precioBase = 500;
    if (material === "lujo") precioBase = 800;

    const total =
      metros * precioBase +
      habitaciones * 2000 +
      banos * 1500;

    setResultado(total);
  };

  return (
    <div className="presupuesto">

      <h1>Solicita tu Presupuesto</h1>
      <p>Completa el formulario y obtén una estimación</p>

      <div className="form">

        <label>Metros Cuadrados</label>
        <input
          type="number"
          placeholder="Ej: 120"
          value={metros}
          onChange={(e) => setMetros(e.target.value)}
        />

        <label>Habitaciones</label>
        <select onChange={(e) => setHabitaciones(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <label>Baños</label>
        <select onChange={(e) => setBanos(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <label>Tipo de Material</label>
        <select onChange={(e) => setMaterial(e.target.value)}>
          <option value="estandar">Estándar</option>
          <option value="premium">Premium</option>
          <option value="lujo">Lujo</option>
        </select>

        <button onClick={calcular}>
          Ver Presupuesto Estimado
        </button>

        {resultado && (
          <h2>Total estimado: ${resultado}</h2>
        )}

      </div>
    </div>
  );
}