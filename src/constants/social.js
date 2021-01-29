import React from "react"
import { FaInstagramSquare, FaFacebookSquare, FaWhatsapp } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

export default ({ styleClass }) => {
  const {
    contentfulContatti: { whatsappNumber, instagramLink, facebookLink },
  } = useStaticQuery(graphql`
    {
      contentfulContatti {
        whatsappNumber
        instagramLink
        facebookLink
      }
    }
  `)
  const data = [
    {
      id: 1,
      icon: <FaFacebookSquare className="facebook icon" />,
      url: `${facebookLink || "https://www.facebook.com"}`,
    },
    {
      id: 2,
      icon: <FaWhatsapp className="whatsapp icon" />,
      url: `https://wa.me/${whatsappNumber || "123456789"}`,
    },
    {
      id: 3,
      icon: <FaInstagramSquare className="instagram icon" />,
      url: `${instagramLink || "https://www.instagram.com"}`,
    },
  ]

  const links = data.map(link => {
    return (
      <li key={link.id}>
        <a href={link.url} target="_blank" className="social-link"
        >
          {link.icon}
        </a>
      </li>
    )
  })


  return (
    <section>
      <ul className={`social-links ${styleClass ? styleClass : ""}`}>
        {links}
      </ul>
    </section>
  )
}
