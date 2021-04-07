import React, { useState, useEffect } from "react"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import foto from "../assets/fotoOferta"
const SliderOferta = () => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       allContentfulFotoOferta {
  //         nodes {
  //           id
  //           foto {
  //             fluid {
  //                 ...GatsbyContentfulFluid_tracedSVG
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)
  const [photos, setPhotos] = useState(foto)
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
  }, [index, photos])

  return (
    <section className="slider">
      <div className="section-center">
        <div className="slider-comandi trasp">
          <button className="prev" onClick={prevSlide}>
            <BiLeftArrow className="icone small" />
          </button>
          <div className="title"></div>
          <button className="next" onClick={nextSlide}>
            <BiRightArrow className="icone small" />
          </button>
        </div>
        {photos.map((photo, photoIndex) => {
          const { id, url } = photo

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
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={url}
                alt={
                  "The Ivy Coworking Barcelona Marianna Catalano Viola Salvadori el Clot"
                }
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default SliderOferta
