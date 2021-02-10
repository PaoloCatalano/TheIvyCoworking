import React from "react"
import SpecialNavbar from "../../components/SpecialNavbar"
import Footer from "../../components/Footer"
import Rooms from "../../components/Rooms"
import Section from "../../components/Section"
import Seo from "../../components/Seo"
import LanguageButtonSpecial from "../../components/languageButtonSpecial"

//in catalano
const Gallery = () => {
  return (
    <>
      <Seo
        title="The Ivy Coworking Gallery"
        lang="ca"
        description="El nostre coworking se situa en un local de 160 m2 distrubuidos en dues plantes. És un acollidor espai, en el qual poder refugiar-se dels sorolls de la ciutat, però tot i així, estar a pocs minuts d'ella."
      />
      <SpecialNavbar cat />
      <LanguageButtonSpecial />
      <Section title="gallery" />
      <Rooms cat />
      <Footer lang="ca" />
    </>
  )
}

export default Gallery
