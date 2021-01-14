import React from "react"
import { Link } from "gatsby"



const data = [
  // {
  //   id: 1,
  //   text: "home",
  //   url: "/",
  // },
  {
    id: 1,
    text: "gallery",
    url: "/gallery/",
  },
]
//mappare ogni elemnto dell'array data
const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default () => {
  return tempLinks
}
