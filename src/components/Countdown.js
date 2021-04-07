import React from "react"
import { navigate } from "@reach/router"
const Countdown = ({ lang }) => {
  const expiringDate = {
    day: 30,
    month: 4,
  }

  return (
    <div style={{ backgroundColor: "#ddbea9", padding: "3rem 0" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: 50,
          color: "#333333",
          margin: "2rem",
          textTransform: "uppercase",
        }}
      >
        {lang === "es"
          ? "¡ES UNA OFERTA VALIDA SOLO PARA ESTE MES!"
          : "This IS AN OFFER VALID ONLY FOR THIS MONTH!"}
      </h1>
      <h4
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: 30,
          color: "#333333",
          margin: "2rem",
          textTransform: "uppercase",
        }}
      >
        {lang === "es" ? "NO TE LO PIENSES!" : "Don't waste any time!"}
      </h4>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "2rem 4rem",
            textAlign: "center",
            fontWeight: 900,
            fontSize: 60,
          }}
        >
          {`${
            new Date().getMonth() + 1 === expiringDate.month
              ? expiringDate.day - new Date().getDate() + 1
              : "0"
          }`}
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: 30,
          color: "#333333",
          margin: "2rem",
          textTransform: "uppercase",
        }}
      >
        {lang === "es" ? "dìas restantes" : "remainig days"}
      </h4>
      <div style={{ display: "grid", placeItems: "center" }}>
        <button
          style={{
            width: "auto",
            backgroundColor: "black",
            borderRadius: "0.25rem",
          }}
          className="submit-btn btn pink"
          onClick={() => {
            navigate("#form")
          }}
        >
          {lang === "es"
            ? "Reserva aquí tu semana gratis!"
            : "Book a week for free now!"}
        </button>
      </div>
    </div>
  )
}

export default Countdown
