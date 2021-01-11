import React from "react"
// import Servizi from '../constants/services'
import { FaPlaystation, FaJava } from "react-icons/fa"

const Services = () => {

  
  
  return (
    <div className="contenitore-servizi">
      {/*  vecchio contenuto <Servizi /> */}
      <div className="servizio">
        <div className="big">
          <FaPlaystation className="icone" />
        </div>
        <p>gaming</p>
      </div>
      <div className="servizio">
        <div className="big">
          <FaJava className="icone" />
        </div>
        <p>gaming</p>
      </div>
      <div className="servizio">
        <div className="big">
          <FaPlaystation className="icone" />
        </div>
        <p>gaming</p>
      </div>
    </div>
  )
}

export default Services
