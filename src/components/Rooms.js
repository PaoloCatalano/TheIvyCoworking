import React from "react"
// import rooms from "../constants/rooms"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Rooms = ({ esp, cat }) => {
  const data = useStaticQuery(graphql`
    {
      pics: allContentfulFotoGallery(
        sort: { fields: ordineDisposizione, order: ASC }
      ) {
        nodes {
          id
          titolo
          titoloEsp
          titoloCat
          foto1 {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          foto2 {
            fluid {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const stanze = data.pics.nodes.map(stanza => {
    const newStanze = {
      id: stanza.id,
      name: stanza.titolo,
      nameEsp: stanza.titoloEsp,
      nameCat: stanza.titoloCat,
      url: stanza.foto1.fluid,
      url2: stanza.foto2.fluid,
    }

    return newStanze
  })

  return (
    <div>
      {stanze.map(room => {
        const { id, url, name, nameEsp, nameCat, url2 } = room

        // const {pics:{nodes:{id, name, url, url2}}} = data;

        return (
          <section key={id} className="card-stanza ">
            <div className="contenitore">
              <Img
                fluid={url}
                alt={name}
                className="box img stanza"
                backgroundColor="#ddbea9"
                FadeIn={true}
                durationFadeIn={2000}
              />
              <div className="box desc">
                <h2 className="titolo">
                  {esp && nameEsp ? nameEsp : cat ? nameCat : name}
                </h2>
              </div>
              <Img
                fluid={url2}
                alt={name}
                className="box img2 stanza"
                backgroundColor="#ddbea9"
                FadeIn={true}
                durationFadeIn={2000}
              />
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Rooms
