import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Seo from "../components/Seo"

const Confirm = ({ location }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Seo title="Confirm" lang="es" />
      <SpecialNavbar esp />
      <div className="landing">
        <div style={{ position: "relative" }}>
          <div
            style={{
              // zIndex: 20,
              background: "#ffffff",
              // position: "absolute",
              width: "100vw",
              height: "auto",
              top: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  placeContent: "center",
                }}
              >
                <article
                  style={{
                    width: "30vw",
                    minWidth: 350,
                    margin: "1rem",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    padding: "2rem 1rem",
                  }}
                >
                  <strong style={{ fontSize: 50 }}>CONFIRM</strong>
                  <form action="https://formspree.io/f/mgepdgpb" method="POST">
                    <div className="form-group">
                      <label htmlFor="name">NOMBRE / NAME</label>
                      <input
                        style={{
                          fontWeight: 600,
                          backgroundColor: "#bdd6e0",
                          pointerEvents: "none",
                        }}
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        className="form-control"
                        required
                        value={location.state ? location.state.name : ""}
                        readOnly
                      />
                      <label htmlFor="name">EMAIL</label>
                      <input
                        style={{
                          fontWeight: 600,
                          backgroundColor: "#bdd6e0",
                          pointerEvents: "none",
                        }}
                        type="email"
                        placeholder="Tu email"
                        name="email"
                        className="form-control"
                        required
                        value={location.state ? location.state.email : ""}
                        onChange={() => {}}
                      />
                      <label htmlFor="name">INFO</label>
                      <textarea
                        style={{
                          fontWeight: 600,
                          backgroundColor: "#bdd6e0",
                          pointerEvents: "none",
                        }}
                        name="message"
                        placeholder="¿Cuando quieres empezar?"
                        className="form-control"
                        required
                        value={location.state ? location.state.content : ""}
                        readOnly
                      ></textarea>
                    </div>
                    <button
                      style={{
                        backgroundColor: "#F94144",
                        borderRadius: "0.25rem",
                      }}
                      type="submit"
                      className={`submit-btn btn  ${
                        location.state &&
                        location.state.name &&
                        location.state.email.includes("@") &&
                        location.state.content
                          ? ""
                          : "inactive-btn"
                      }`}
                    >
                      CONFIRM
                    </button>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
