import React from "react"
import SpecialNavbar from "../../components/SpecialNavbar"
import Footer from "../../components/Footer"
import Rooms from "../../components/Rooms"
import Section from "../../components/Section"
import Seo from "../../components/Seo"
import LanguageButtonSpecial from "../../components/languageButtonSpecial"

//in spagnolo
const Fotos = () => {
  return (
    <>
      <Seo
        title="The Ivy Coworking Fotos"
        lang="es"
        description="Nuestro coworking se sitúa en un local de 160 m2 distrubuidos en dos plantas. Es un acogedor espacio, en el que poder refugiarse de los ruidos de la ciudad, pero aún así, estar a dos pasos de ella."
        keywords="SALA REUNIONS, CABINA TELEFÒNICA, PATIO SECRETO, ZONA CHILL Y COMEDOR"
      />
      <SpecialNavbar esp />
      <LanguageButtonSpecial />
      <Section title="fotos" />
      <Rooms esp />
      <Footer lang="es" />
    </>
  )
}

export default Fotos
