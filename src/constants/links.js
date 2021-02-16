import React, { useState, useEffect } from "react"
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
  const [links, setLinks] = useState([])

  useEffect(() => {
    if (lang === "es") {
      setLinks(dataEsp)
    } else if (lang === "ca") {
      setLinks(dataCat)
    } else {
      setLinks(data)
    }
  }, [lang])

  const tempLinks = links.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
    )
  })
  return tempLinks
}
