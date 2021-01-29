import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import Section from "../components/Section"
import Seo from "../components/Seo"

const Gallery = () => {
  
  return (
    <>
      <Seo title="Gallery" />
      <SpecialNavbar />
      <Section title="gallery" />
      <Rooms />
      <Footer />
    </>
  )
}


export default Gallery
