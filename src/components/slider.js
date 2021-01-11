import React, { useState, useEffect } from "react"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import data from "../constants/data"
import logo from "../assets/logo2.png"


function Slider() {
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

  // useEffect(() => {
  //   const lastIndex = photos.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, photos])

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
            <div className='cerchio'>
              <img src={logo} alt="logo" className="logo" />
            </div>
          </div>
          <button className="next" onClick={nextSlide}>
            <BiRightArrow className="icone small" />
          </button>
        </div>
        {photos.map((photo, photoIndex) => {
          const { id, url, name } = photo

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
              <img src={url} alt={name} className="img" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Slider
