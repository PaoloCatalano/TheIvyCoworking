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
import { Link } from "gatsby"

export default function Home() {
  const { aboutCat, descCat } = useStaticQuery(graphql`
    {
      aboutCat: contentfulAboutCat {
        testoCat {
          testoCat
        }
      }
      descCat: contentfulDescrizioneCat {
        titoloCat
        descrizioneCat {
          descrizioneCat
        }
      }
    }
  `)

  return (
    <>
      <div id="top" className="position"></div>

      <Navbar lang="ca" />
      <Slider />
      <Seo
        title="The Ivy Coworking Home"
        lang="ca"
        description={descCat.descrizioneCat.descrizioneCat}
        keywords="Espanya, treball, espai"
      />
      <main>
        <div className="background">
          <section className="container-all">
            <Descrizione cat={descCat} />
          </section>
        </div>
        <section>
          <div id="services" className="position"></div>
          <Section title={"serveis"} />
          <Services lang="ca" />
        </section>
        <section>
          <div className="background">
            <div id="pricing" className="position"></div>
            <Section title={"tarifes"} />
            <Pricing cat />
            <section className="contenitore-servizi">
              <Link
                to="/oferta/"
                alt="OFERTA"
                className=" link-oferta grassetto blue pink"
              >
                descobreix la nostra oferta
              </Link>
            </section>
            <div className="spazio" style={{ height: 50 }}></div>
          </div>
        </section>
        <section>
          <div id="about" className="position"></div>
          <Section title={"about"} />
          <About aboutCat={aboutCat} />
        </section>
        <section>
          <div className="background">
            <div id="contact" className="position"></div>
            <Section title={"contactes"} />
            <Contact lang="ca" />
          </div>
        </section>
      </main>
      <Footer lang="ca" />
    </>
  )
}
