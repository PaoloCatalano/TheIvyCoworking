import React from "react"

// Contáctanos

// Nombre
// Mail
// Mensaje
// Envia

const Offerta = ({ lang }) => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [content, setContent] = React.useState("")
  return (
    <article className="contact-form">
      {lang === "es" ? (
        <div>
          <div
            style={{
              fontSize: 55,
              color: "#ffffff",
              fontWeight: 800,
              paddingTop: "1rem",
            }}
          >
            1 SEMANA GRATIS!
          </div>
          <h3>Dal 15 al 30 de marzo 2021</h3>
          <p style={{ padding: "1rem" }}>
            ¡Reserva aquí y disfruta de 1 semana de prueba sin coste ni
            compromiso!
          </p>
        </div>
      ) : lang === "ca" ? (
        <h3>Contacta'ns</h3>
      ) : (
        <h3>get in touch</h3>
      )}

      <form action="https://formspree.io/f/mgepdgpb" method="POST">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={
              lang === "es" ? "Tu nombre" : lang === "ca" ? "nom" : "name"
            }
            className="form-control"
            required
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <input
            type="email"
            placeholder={
              lang === "es" ? "Tu mail" : lang === "ca" ? "mail" : "email"
            }
            name="email"
            className="form-control"
            required
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder={
              lang === "es"
                ? "¿Cuando quieres empezar?"
                : lang === "ca"
                ? "missatge"
                : "message"
            }
            className="form-control"
            required
            onChange={e => {
              setContent(e.target.value)
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit-btn btn"
          onClick={() => {
            if (typeof window !== "undefined") {
              if (
                window.fbq != null &&
                name &&
                email.includes("@") &&
                content
              ) {
                window.fbq("track", "Purchase", {
                  value: 16,
                  currency: "EUR",
                  //   content_name: name,
                  //   content_type: email,
                  //   content_category: content,
                })
              }
            }
          }}
        >
          {lang === "es"
            ? "Reserva  aquì"
            : lang === "ca"
            ? "envia"
            : "submit here"}
        </button>
      </form>
    </article>
  )
}

export default Offerta
