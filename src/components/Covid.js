import React from "react"
import { RiVirusFill } from "react-icons/ri"
const Covid = ({ lang }) => {
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
        {lang === "en"
          ? "ANTI-COVID MESURES:"
          : "PRINCIPALES MEDIDAS ANTI-COVID:"}
      </h1>
      <p>
        {lang === "en"
          ? "All workstations have a minimum distance of 1.5m between them."
          : " Todos los asientos tienen una distancia minima de 1,5 m entre ellos."}
      </p>
      <p>
        {lang === "en"
          ? "We provide a divider every workstation."
          : "         Cada mesa con 2 asientos dispone de separador."}
      </p>
      <p>
        {lang === "en"
          ? "Tables and common spaces are disinfected every day."
          : "Cada día se desinfecta tantos las mesas así como los espacios comunes."}
      </p>
      <p>
        {lang === "en"
          ? "Mandatory use of the mask in all common spaces."
          : "Uso obligatorio de la mascarilla en todos los espacios comunes."}
      </p>
      <p>
        {lang === "en"
          ? "Continuous outdoor air renewal."
          : " Renovación con aire exterior continua."}
      </p>
      <p>
        {lang === "en"
          ? "Specialized personnel for washing and ordering the kitchenware. "
          : "Personal especifico para el lavado y orden del menaje."}
      </p>
    </div>
  )
}

export default Covid
