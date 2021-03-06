import React from "react"
// import Servizi from '../constants/services'
import { TiWiFi } from "react-icons/ti"
import { AiFillPrinter } from "react-icons/ai"
import { FaMailBulk } from "react-icons/fa"
import { GoLock } from "react-icons/go"
import { GiCoffeeCup } from "react-icons/gi"
import { IoMdSunny } from "react-icons/io"
import { MdKitchen, MdPets } from "react-icons/md"
import { RiEmotionLine } from "react-icons/ri"

const Services = ({ lang }) => {
  return (
    <div className="contenitore-servizi">
      {/*  vecchio contenuto <Servizi /> */}
      <div className="servizio">
        <div className="big">
          <TiWiFi className="icone" />
        </div>
        {lang === "es" ? (
          <p>Internet de alta velocidad</p>
        ) : lang === "ca" ? (
          <p>Wifi fibra óptica de 600Mb</p>
        ) : (
          <p>600Mb fiber-optic WiFi</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <AiFillPrinter className="icone" />
        </div>
        {lang === "es" ? (
          <p>Impresora y Scanner</p>
        ) : lang === "ca" ? (
          <p>Impressora i Scanner</p>
        ) : (
          <p>Printer and Scanner</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <FaMailBulk className="icone" />
        </div>
        {lang === "es" ? (
          <p>Recepción de correos y paquetes</p>
        ) : lang === "ca" ? (
          <p>Recepció de correus i paquets</p>
        ) : (
          <p>Mails and parcels reception</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <GoLock className="icone" />
        </div>
        {lang === "es" ? (
          <p>Taquilla personal</p>
        ) : lang === "ca" ? (
          <p>Taquilla personal</p>
        ) : (
          <p>Personal lockers</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <GiCoffeeCup className="icone" />
        </div>
        {lang === "es" ? (
          <p>Cafetería</p>
        ) : lang === "ca" ? (
          <p>Cafetería</p>
        ) : (
          <p>Cafeteria</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <IoMdSunny className="icone" />
        </div>
        {lang === "es" ? (
          <p>Patio</p>
        ) : lang === "ca" ? (
          <p>Pati</p>
        ) : (
          <p>Outdoor space</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <MdKitchen className="icone" />
        </div>
        {lang === "es" ? (
          <p>Acceso a la cocina</p>
        ) : lang === "ca" ? (
          <p>Accés a la cuina</p>
        ) : (
          <p>Kitchen facilities</p>
        )}
      </div>
      <div className="servizio">
        <div className="big">
          <MdPets className="icone" />
        </div>
        <p>Dog-friendly</p>
      </div>
      <div className="servizio">
        <div className="big">
          <RiEmotionLine className="icone" />
        </div>
        {lang === "es" ? (
          <p>Buen rollo!</p>
        ) : lang === "ca" ? (
          <p>Bon rollto!</p>
        ) : (
          <p>Good vibes!</p>
        )}
      </div>
    </div>
  )
}

export default Services
