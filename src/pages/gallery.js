// import React from "react"
// import SpecialNavbar from "../components/SpecialNavbar"
// import Footer from "../components/Footer"
// import Rooms from "../components/Rooms"
// import Section from "../components/Section"

// const Gallery = () => {
//   return (
//     <>
//       <SpecialNavbar />
//       <Section title="gallery" />
//       <Rooms />
//       <Footer />
//     </>
//   )
// }

// export default Gallery

import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  console.log(data.allContentfulPrezziCards.nodes[2].noteEn)
  return (

    <ReactMarkdown
      source={data.allContentfulPrezziCards.nodes[2].noteEn.noteEN}
    />
  )
}

export const query = graphql`
  {
    allContentfulPrezziCards {
      nodes {
        id
        note
        noteEn {
          noteEn
          id
        }
        sottotitoloEn
        prezzoEn
        titoloEn
      }
    }
  }
`

export default ComponentName
