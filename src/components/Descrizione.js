import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const Descrizione = ({ esp, cat }) => {
  const data = useStaticQuery(graphql`
    {
      desc: contentfulDescrizioneEn {
        titoloEn
        de: descrizioneEn {
          d: descrizioneEn
        }
      }
    }
  `)
  return (
    <>
      <div className="about white">
        <div className="about-title">
          {esp ? (
            <h1>{esp.titoloEn}</h1>
          ) : cat ? (
            <h1>{cat.titoloCat}</h1>
          ) : (
            <h1>{data.desc.titoloEn}</h1>
          )}

          {/* <h3>Your coworking in El Clot!</h3> */}
        </div>
        {esp ? (
          <ReactMarkdown source={esp.descEsp.descrizioneEn} />
        ) : cat ? (
          <ReactMarkdown source={cat.descrizioneCat.descrizioneCat} />
        ) : (
          <ReactMarkdown source={data.desc.de.d} />
        )}
      </div>
    </>
  )
}

export default Descrizione
