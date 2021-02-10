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
import Descrizione from "../components/Descrizione"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <>
      <div id="top" className="position"></div>
      <Navbar />
      <Slider />
      <Seo title="The Ivy Coworking Home" />
      <main>
        <div className="background">
          <section className="container-all">
            <Descrizione />
          </section>
        </div>
        <section>
          <div id="services" className="position"></div>
          <Section title={"services"} />
          <Services />
        </section>
        <section>
          <div className="background">
            <div id="pricing" className="position"></div>
            <Section title={"pricing"} />
            <Pricing />
            <div className="spazio" style={{ height: 50 }}></div>
          </div>
        </section>
        <section>
          <div id="about" className="position"></div>
          <Section title={"about"} />
          <About />
        </section>
        <section>
          <div className="background">
            <div id="contact" className="position"></div>
            <Section title={"contact"} />
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
