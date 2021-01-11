import React from "react"
import { FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="facebook" />,
    url: "https://www.facedbook.com",
  },
  {
    id: 2,
    icon: <FaWhatsapp className="whatsapp" />,
    url: "https://wa.me/393285696312",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="instagram" />,
    url: "https://www.instagram.com",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})





export default ({ styleClass }) => {
  return (
    <section className='spazio'>
      <ul className={`social-links ${styleClass ? styleClass : ""}`}>
        {links}
      </ul>
    </section>
  )
}
