import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'


const Descrizione = () => {
   const data = useStaticQuery(graphql`
     {
       desc: contentfulDescrizioneEn {
         titoloEn
        de: descrizioneEn {
         d:  descrizioneEn
         }
       }
     }
   `)
    return (
      <>
        <div className="about white">
          <div className="about-title">
            <h1>{data.desc.titoloEn}</h1>
            {/* <h3>Your coworking in El Clot!</h3> */}
        </div>
           <ReactMarkdown source={data.desc.de.d}/>
        </div>
      </>
    )
}

export default Descrizione
