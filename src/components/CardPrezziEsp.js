import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const CardPrezziEsp = ({ cat }) => {
  const {
    prezzi: { nodes },
  } = useStaticQuery(graphql`
    {
      prezzi: allContentfulPrezziCardsEn(
        sort: { fields: contentfulid, order: ASC }
      ) {
        nodes {
          titoloEn
          sottotitoloEsp
          sottotitoloCat
          testo: childContentfulPrezziCardsEnFeatureEspTextNode {
            featureEsp
          }
          featureCat {
            featureCat
          }
          prezzoEn
          mensile
          note
          info: noteEsp {
            noteEsp
          }
          noteCat {
            noteCat
          }
        }
      }
    }
  `)

  return (
    <>
      {nodes.map(
        (
          {
            titoloEn,
            sottotitoloEsp,
            sottotitoloCat,
            testo,
            featureCat,
            prezzoEn,
            mensile,
            note,
            info,
            noteCat,
          },
          index
        ) => {
          return (
            <div key={index} className="bordo-carta">
              <section className="pacchetto card">
                {/**<div className="icone">{icon}</div>*/}
                <h1>{titoloEn}</h1>
                <h4>{cat ? sottotitoloCat : sottotitoloEsp}</h4>
                <div className="testo">
                  <ReactMarkdown
                    source={cat ? featureCat.featureCat : testo.featureEsp}
                  />
                </div>
                <h3>
                  <span className="prezzo"> € {prezzoEn}</span>
                  {mensile && <span>/mes</span>} + IVA{" "}
                </h3>
                <div className="note">
                  {note && (
                    <ReactMarkdown
                      source={cat ? noteCat.noteCat : info.noteEsp}
                    />
                  )}
                </div>
              </section>
            </div>
          )
        }
      )}
    </>
  )
}

export default CardPrezziEsp
