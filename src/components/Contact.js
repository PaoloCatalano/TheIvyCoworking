import React from "react"
import { Link } from "gatsby"
// Contáctanos

// Nombre
// Mail
// Mensaje
// Envia

const Contact = ({ lang }) => {
  const [nome, setNome] = React.useState("")
  const [eMail, setEMail] = React.useState("")
  const [message, setMessage] = React.useState("")
  return (
    <article className="contact-form">
      {lang === "es" ? (
        <h3>Contáctanos</h3>
      ) : lang === "ca" ? (
        <h3>Contacta'ns</h3>
      ) : (
        <h3>get in touch</h3>
      )}

      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={
              lang === "es" ? "Nombre" : lang === "ca" ? "nom" : "name"
            }
            className="form-control"
            required
            onChange={e => {
              setNome(e.target.value)
            }}
          />
          <input
            type="email"
            placeholder={
              lang === "es" ? "mail" : lang === "ca" ? "mail" : "email"
            }
            name="email"
            className="form-control"
            required
            onChange={e => {
              setEMail(e.target.value)
            }}
          />
          <textarea
            name="message"
            rows="5"
            placeholder={
              lang === "es" ? "Mensaje" : lang === "ca" ? "missatge" : "message"
            }
            className="form-control"
            required
            onChange={e => {
              setMessage(e.target.value)
            }}
          ></textarea>
        </div>
        {/* <button type="submit" className="submit-btn btn">
          {lang === "es" ? "envia" : lang === "ca" ? "envia" : "submit here"}
        </button> */}
        <Link
          style={{ textTransform: "uppercase" }}
          className={`submit-btn btn  ${
            nome && eMail.includes("@") && message ? "" : "inactive-btn"
          }`}
          to="/confirm/"
          alt="confirm page"
          state={{
            name: `${nome}`,
            email: `${eMail}`,
            content: `${message}`,
          }}
          // style={{
          //   borderRadius: "0.25rem",
          //   textTransform: "uppercase",
          //   fontWeight: 600,
          // }}
          onClick={() => {
            if (typeof window !== "undefined") {
              if (window.fbq != null) {
                window.fbq("track", "Lead", {
                  value: "",
                  currency: "",
                })
              }
            }
          }}
        >
          {lang === "es" ? "envia" : lang === "ca" ? "envia" : "submit here"}
        </Link>
      </form>
    </article>
  )
}

export default Contact
