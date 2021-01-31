import React from 'react'
// import about from "../constants/about"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"




const About = () => {    
    
// const {title, desc} = about;

const {data:{testo:{testo}}} = useStaticQuery(graphql`
  {
    data: contentfulAboutEn {
      testo {
        testo
      }
    }
  }
`)

    return (
      <div className="about">
        {/* <p>{testo}</p> */}
        <div className='contenitore-about'>
        <ReactMarkdown source={testo} />

        </div>
      </div>
    )
}

export default About
