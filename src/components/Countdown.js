import React, { useEffect, useRef } from "react"
import { navigate } from "@reach/router"
const Countdown = ({ lang }) => {
  // const expiringDate =
  //   {
  //     day: 30,
  //     month: 4,
  //   } +
  //     1 ===
  //   expiringDate.month
  //     ? expiringDate.day - new Date().getDate() + 1
  //     : "0"
  const hours = useRef(null)
  const minutes = useRef(null)
  // const seconds = useRef(null)
  let timing = new Date().getSeconds()

  useEffect(() => {
    setInterval(() => {
      timing = new Date().getSeconds()
      hours.current.innerHTML = 23 - new Date().getHours()
      minutes.current.innerHTML = 59 - new Date().getMinutes()
      // console.log(59 - new Date().getSeconds())
    }, 1000)
    return clearInterval(() => {
      timing = new Date().getSeconds()
    })
  }, [timing])

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
          ? "¡ES UNA OFERTA VALIDA SOLO PARA HOY!"
          : "The offer is limited!"}
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
        {lang === "es" ? "NO TE LO PIENSES!" : " The time's running out!"}
      </h4>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "1.5rem 4rem",
              marginRight: "0.5rem",
              textAlign: "center",
              fontWeight: 900,
              fontSize: 60,
              width: 185,
              height: 150,
            }}
          >
            <div ref={hours}>??</div>
            <div style={{ fontSize: 20, fontWeight: 100 }}>H.</div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "1.5rem 4rem",
              marginLeft: "0.5rem",

              textAlign: "center",
              fontWeight: 900,
              fontSize: 60,
              width: 185,
              height: 150,
            }}
          >
            <div ref={minutes}>??</div>
            <div style={{ fontSize: 20, fontWeight: 100 }}>MIN.</div>
          </div>
          {/* <div
            style={{
              backgroundColor: "#ffffff",
              padding: "1.5rem 4rem",
              marginLeft: "0.5rem",

              textAlign: "center",
              fontWeight: 900,
              fontSize: 60,
              width: 185,
              height: 150,
            }}
          >
            <div ref={seconds}>??</div>
            <div style={{ fontSize: 20, fontWeight: 100 }}>SEC.</div>
          </div> */}
        </div>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <button
          style={{
            width: "auto",
            backgroundColor: "black",
            borderRadius: "0.25rem",
            marginTop: "2rem",
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
