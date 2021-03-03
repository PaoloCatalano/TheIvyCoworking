import React from "react"
import { Link } from "gatsby"
const Popup = ({ setClicked, clicked }) => {
  const hidePopup = () => {
    setClicked(true)
  }

  return (
    <div className={`popup ${clicked ? "hidePopup" : ""}`}>
      <div>
        Esta web usa cookies Las cookies de este sitio web se usan para
        personalizar el contenido y los anuncios, ofrecer funciones de redes
        sociales y analizar el tráfico. Además, compartimos información sobre el
        uso que haga del sitio web con nuestros partners de redes sociales,
        publicidad y análisis web, quienes pueden combinarla con otra
        información que les haya proporcionado o que hayan recopilado a partir
        del uso que haya hecho de sus servicios. 
        <p>
          <button onClick={hidePopup}>OK</button>
          <button>
            <Link to="/privacy-policy/">Leer más</Link>
          </button>
        </p>
      </div>
    </div>
  )
}

export default Popup
