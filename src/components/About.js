import React from 'react'
import about from "../constants/about"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"




const About = () => {    
    
const {title, desc} = about;

const {data:{titoloEn, testo:{testo}}} = useStaticQuery(graphql`
  {
    data: contentfulAboutEn {
      testo {
        testo
      }
      titoloEn
    }
  }
`)

    return (
      <div className="about">
        <div className="about-title">
          <h1>{titoloEn}</h1>
        </div>
        {/* <p>{testo}</p> */}
        <ReactMarkdown source={testo} />
      </div>
    )
}

export default About
