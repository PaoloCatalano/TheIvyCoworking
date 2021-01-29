import React, { useState, useEffect } from "react"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
// import data2 from "../constants/data"
import logo from "../assets/logo2.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Slider() {
  const query = useStaticQuery(graphql`
    {
      pics: allContentfulFotoHome {
        data: nodes {
          id
          immagine {
            url: fluid {
              ...GatsbyContentfulFluid_noBase64
            }
            name: title
          }
        }
      }
      logo: file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const {
    pics: { data },
    logo: {
      childImageSharp: { fluid },
    },
  } = query

  const [photos, setPhotos] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1
      if (index > photos.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1
      if (index < 0) {
        index = photos.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > photos.length - 1) {
          index = 0
        }
        return index
      })
    }, 7000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className="slider">
      <div className="section-center">
        <div className="slider-comandi">
          <button className="prev" onClick={prevSlide}>
            <BiLeftArrow className="icone small" />
          </button>
          <div className="title">
            <div className="cerchio">
              <Img
                fluid={fluid}
                alt="logo"
                className=" logo-small-slider logo"
              />
            </div>
          </div>
          <button className="next" onClick={nextSlide}>
            <BiRightArrow className="icone small" />
          </button>
        </div>
        {photos.map((photo, photoIndex) => {
          // const { id, url, name } = photo
          const {
            id,
            immagine: { url },
            name,
          } = photo

          let position = "nextSlide"
          if (photoIndex === index) {
            position = "activeSlide"
          }
          if (
            photoIndex === index - 1 ||
            (index === 0 && photoIndex === photos.length - 1)
          ) {
            position = "lastSlide"
          }

          return (
            <article className={`slide ${position}`} key={id}>
              {/* vecchio <img src={url} alt={name} className="img" /> */}
              <Img
                fluid={url}
                alt={name}
                backgroundColor="#ddbea9"
                FadeIn={true}
                durationFadeIn={2000}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Slider
