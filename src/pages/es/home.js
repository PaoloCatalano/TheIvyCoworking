import React from "react"
import Navbar from "../../components/navbar"
import Footer from "../../components/Footer"
// import Layout from "../../components/Layout"
import Slider from "../../components/slider"
import About from "../../components/About"
import Services from "../../components/Services"
import Contact from "../../components/Contact"
import Pricing from "../../components/Pricing"
import Section from "../../components/Section"
import Descrizione from "../../components/Descrizione"
import Seo from "../../components/Seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const { aboutEsp, descrizioneEsp } = useStaticQuery(graphql`
    {
      aboutEsp: contentfulAboutEsp {
        testo {
          testo
        }
      }
      descrizioneEsp: contentfulDescrizioneEsp {
        titoloEn
        descEsp: childContentfulDescrizioneEspDescrizioneEnTextNode {
          descrizioneEn
        }
      }
    }
  `)
  return (
    <>
      <div id="top" className="position"></div>

      <Navbar lang="es" />
      <Slider />
      <Seo
        title="The Ivy Coworking Home"
        lang="es"
        description="Nuestro coworking se sitúa en un local de 160 m2 distrubuidos en dos plantas. Es un acogedor espacio, en el que poder refugiarse de los ruidos de la ciudad, pero aún así, estar a dos pasos de ella."
      />
      <main>
        <div className="background">
          <section className="container-all">
            <Descrizione esp={descrizioneEsp} />
          </section>
        </div>
        <section>
          <div id="services" className="position"></div>
          <Section title={"servicios"} />
          <Services lang="es" />
        </section>
        <section>
          <div className="background">
            <div id="pricing" className="position"></div>
            <Section title={"tarifas"} />
            <Pricing esp />
            <div className="spazio" style={{ height: 50 }}></div>
          </div>
        </section>
        <section>
          <div id="about" className="position"></div>
          <Section title={"about"} />
          <About aboutEsp={aboutEsp} />
        </section>
        <section>
          <div className="background">
            <div id="contact" className="position"></div>
            <Section title={"contacto"} />
            <Contact lang="es" />
          </div>
        </section>
      </main>
      <Footer lang="es" />
    </>
  )
}
