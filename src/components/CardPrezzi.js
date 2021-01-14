import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const CardPrezzi = () => {
  const {
    prezzi: { nodes },
  } = useStaticQuery(graphql`
    {
      prezzi: allContentfulPrezziCardsEn(
        sort: { order: ASC, fields: contentfulid }
      ) {
        nodes {
          contentfulid
          titoloEn
          sottotitoloEn
          testo: childContentfulPrezziCardsEnFeatureEnTextNode {
            featureEn
          }
          prezzoEn
          mensile
          note
          info: childContentfulPrezziCardsEnNoteEnTextNode {
            noteEn
          }
        }
      }
    }
  `)
  return (
    <>
      {nodes.map(
        ({
          contentfulid,
          titoloEn,
          sottotitoloEn,
          testo,
          prezzoEn,
          mensile,
          note,
          info,
        }) => {
          return (
            <section key={contentfulid} className="pacchetto card">
              {/**<div className="icone">{icon}</div>*/}
              <h1>{titoloEn}</h1>
              <h4>{sottotitoloEn}</h4>
              <div className="testo">
                <ReactMarkdown source={testo.featureEn} />
              </div>
              <h3>
                <span className="prezzo"> € {prezzoEn}</span>
                {mensile && <span> month</span>} + VAT{" "}
              </h3>
              <div className="note">
                {note && <ReactMarkdown source={info.noteEn} />}
              </div>
            </section>
          )
        }
      )}
    </>
  )
}



export default CardPrezzi
