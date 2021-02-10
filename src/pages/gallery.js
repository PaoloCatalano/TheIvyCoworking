import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import Section from "../components/Section"
import Seo from "../components/Seo"
import LanguageButtonSpecial from "../components/LanguageButtonSpecial"

const Gallery = () => {
  return (
    <>
      <Seo title="The Ivy Coworking Gallery" />
      <SpecialNavbar />
      <LanguageButtonSpecial />
      <Section title="gallery" />
      <Rooms />
      <Footer />
    </>
  )
}

export default Gallery
