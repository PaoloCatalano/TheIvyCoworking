import React from "react"
// import about from "../constants/about"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const About = ({ aboutEsp, aboutCat }) => {
  // const {title, desc} = about;
  const {
    data: {
      testo: { testo },
    },
  } = useStaticQuery(graphql`
    {
      data: contentfulAboutEn {
        testo {
          testo
        }
      }
    }
  `)

  return (
    <div className="container-all">
      {/* <p>{testo}</p> */}
      <div className="about">
        {aboutEsp ? (
          <ReactMarkdown source={aboutEsp.testo.testo} />
        ) : aboutCat ? (
          <ReactMarkdown source={aboutCat.testoCat.testoCat} />
        ) : (
          <ReactMarkdown source={testo} />
        )}
      </div>
    </div>
  )
}

export default About
