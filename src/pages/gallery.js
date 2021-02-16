import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import Section from "../components/Section"
import Seo from "../components/Seo"
import LanguageButtonSpecial from "../components/languageButtonSpecial"

const Gallery = () => {
  return (
    <>
      <Seo
        title="The Ivy Coworking Gallery"
        keywords="kitchen, FIRST FLOOR WORKSPACE, MEETING ROOM, GROUND FLOOR WORKSPACE, PHONE BOOTH, SECRET PATIO, CHILL AREA, DINING AREA"
      />
      <SpecialNavbar />
      <LanguageButtonSpecial />
      <Section title="gallery" />
      <Rooms />
      <Footer />
    </>
  )
}

export default Gallery
