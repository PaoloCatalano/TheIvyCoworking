import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"
// import Layout from "../components/Layout"
import Slider from "../components/slider"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Pricing from "../components/Pricing"
import Section from "../components/Section"
import Descrizione from '../components/Descrizione'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <main>
        <section>
          <Descrizione />
        </section>
        <section>
          <div id="services" className="position"></div>
          <Section title={"services"} />
          <Services />
        </section>
        <section>
          <div id="pricing" className="position"></div>
          <Section title={"pricing"} />
          <Pricing />
        </section>
        <section>
          <div id="about" className="position"></div>
          <Section title={"about"} />
          <About />
        </section>
        <section>
          <div id="contact" className="position"></div>
          <Section title={"contact"} />
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
