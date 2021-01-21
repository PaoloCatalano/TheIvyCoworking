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
import Background from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"


export default function Home() {
   const query = useStaticQuery(graphql`
     {
       pics: allContentfulFotoHome {
         data: nodes {
           id
           immagine {
             url: fluid {
               ...GatsbyContentfulFluid
             }
             name: title
           }
         }
       }
     }
   `)



  return (
    <>
      <Navbar />
      <Slider />
      <main>
        <section>
          <Background fluid={query.pics.data[0].immagine.url}>
            <Descrizione />
          </Background>
        </section>
        <section>
          <div id="services" className="position"></div>
          <Section title={"services"} />
          <Services />
        </section>
        <section>
          <Background fluid={query.pics.data[0].immagine.url}>
            <div id="pricing" className="position"></div>
            <Section title={"pricing"} />
            <Pricing />
          </Background>
        </section>
        <section>
          <div id="about" className="position"></div>
          <Section title={"about"} />
          <About />
        </section>
        <section>
          <Background fluid={query.pics.data[0].immagine.url}>
            <div id="contact" className="position"></div>
            <Section title={"contact"} />
            <Contact />
          </Background>
        </section>
      </main>
      <Footer />
    </>
  )
}
