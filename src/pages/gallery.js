import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import Section from "../components/Section"

const Gallery = () => {
  
  return (
    <>
      <SpecialNavbar />
      <Section title="gallery" />
      <Rooms />
      <Footer />
    </>
  )
}


export default Gallery

// import React from "react"
// import { graphql } from "gatsby"
// import ReactMarkdown from "react-markdown"

// const ComponentName = ({ data }) => {
//   return (
//     <ReactMarkdown source={data.allContentfulProvaType.nodes[0].testo.testo} />
//   )
// }

// export const query = graphql`
//   {
//     allContentfulProvaType {
//       nodes {
//         testo {
//           testo
//         }
//       }
//     }
//   }
// `

// export default ComponentName
