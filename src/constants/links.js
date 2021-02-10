import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "gallery",
    url: "/gallery/",
  },
]
const dataEsp = [
  {
    id: 1,
    text: "fotos",
    url: "/es/fotos/",
  },
]
const dataCat = [
  {
    id: 1,
    text: "gallery",
    url: "/ca/gallery/",
  },
]

export default ({ lang }) => {
  //mappare ogni elemnto dell'array data
  let tempLinks = []
  if (lang === "es") {
    return (tempLinks = dataEsp.map(link => {
      return (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      )
    }))
  }
  if (lang === "ca") {
    return (tempLinks = dataCat.map(link => {
      return (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      )
    }))
  } else {
    tempLinks = data.map(link => {
      return (
        <li key={link.id}>
          <Link to={link.url}>{link.text}</Link>
        </li>
      )
    })
  }
  return tempLinks
}
