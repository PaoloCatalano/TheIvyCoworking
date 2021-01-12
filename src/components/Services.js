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



const Services = () => {
  return (
    <div className="contenitore-servizi">
      {/*  vecchio contenuto <Servizi /> */}
      <div className="servizio">
        <div className="big">
          <TiWiFi className="icone" />
        </div>
        <p>600Mb fiber-optic WiFi</p>
      </div>
      <div className="servizio">
        <div className="big">
          <AiFillPrinter className="icone" />
        </div>
        <p>Printer and Scanner</p>
      </div>
      <div className="servizio">
        <div className="big">
          <FaMailBulk className="icone" />
        </div>
        <p>Mails and parcels reception</p>
      </div>
      <div className="servizio">
        <div className="big">
          <GoLock className="icone" />
        </div>
        <p>Personal lockers</p>
      </div>
      <div className="servizio">
        <div className="big">
          <GiCoffeeCup className="icone" />
        </div>
        <p>Cafeteria</p>
      </div>
      <div className="servizio">
        <div className="big">
          <IoMdSunny className="icone" />
        </div>
        <p>Outdoor space</p>
      </div>
      <div className="servizio">
        <div className="big">
          <MdKitchen className="icone" />
        </div>
        <p>Kitchen facilities</p>
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
        <p>Good vibes!</p>
      </div>
    </div>
  )
}

export default Services
