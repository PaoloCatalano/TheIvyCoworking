import React from "react"
import { RiVirusFill } from "react-icons/ri"
const Covid = () => {
  return (
    <div
      className="covid"
      style={{
        background: "#077287",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <div>
        <RiVirusFill style={{ fontSize: "4rem" }} />
      </div>
      <h1 style={{ margin: "0.75rem", fontWeight: 800, fontSize: "2.5rem" }}>
        PRINCIPALES MEDIDAS ANTI-COVID:
      </h1>
      <p>
        Todos los asientos tienen una distancia minima de 1,5 m entre ellos.
      </p>
      <p>Cada mesa con 2 asientos dispone de separador.</p>
      <p>
        Cada día se desinfecta tantos las mesas así como los espacios comunes.
      </p>
      <p>Uso obligatorio de la mascarilla en todos los espacios comunes.</p>
      <p>Renovación con aire exterior continua.</p>
      <p>Personal especifico para el lavado y orden del menaje.</p>
    </div>
  )
}

export default Covid
