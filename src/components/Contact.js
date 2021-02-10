import React from "react"

// Contáctanos

// Nombre
// Mail
// Mensaje
// Envia

const Contact = ({ lang }) => {
  return (
    <article className="contact-form">
      {lang === "es" ? (
        <h3>Contáctanos</h3>
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
              lang === "es" ? "Nombre" : lang === "ca" ? "nom" : "name"
            }
            className="form-control"
            required
          />
          <input
            type="email"
            placeholder={
              lang === "es" ? "mail" : lang === "ca" ? "mail" : "email"
            }
            name="email"
            className="form-control"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder={
              lang === "es" ? "Mensaje" : lang === "ca" ? "missatge" : "message"
            }
            className="form-control"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn btn">
          {lang === "es" ? "envia" : lang === "ca" ? "envia" : "submit here"}
        </button>
      </form>
    </article>
  )
}

export default Contact
