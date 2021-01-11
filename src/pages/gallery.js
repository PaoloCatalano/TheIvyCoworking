import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import Section from "../components/Section"

const Gallery = () => {
  return (
    <>
      <SpecialNavbar />
      <Section title="gallery" />
      <Rooms />
      <Footer />
    </>
  )
}

export default Gallery
