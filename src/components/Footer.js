import React from "react"
import logo from "../assets/logo2.png"
import Social from "../constants/social"
import info from "../constants/contact"
import { BiTimeFive } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { AiOutlinePhone } from "react-icons/ai"
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ lang }) => {
  // const { address, weekday, weekend, phone, email } = info

  //Contentful
  const {
    contentfulContatti: { indirizzo, orario, telefono, email },
  } = useStaticQuery(graphql`
    {
      contentfulContatti {
        indirizzo
        orario
        telefono
        email
      }
    }
  `)

  const telefonoSpazi =
    telefono.toString().substring(0, 3) +
    " " +
    telefono.substring(3, 6) +
    " " +
    telefono.substring(6, 9) +
    " " +
    telefono.substring(9, telefono.length)
  return (
    <div className="footer">
      <section className="colonna">
        <img src={logo} alt="logo" className="logo" />
      </section>
      <section className="colonna">
        <div className="address">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D41.409583318199%252C2.1855947887525%26fbclid%3DIwAR1EarXO-9FDs2c0oAA5JtBl-mk2yXOCzhd4hFVpXHa9ReE1ajWbs7Hpl-E&h=AT0pWZq249Pkp9IONwN0CQeRn1IhqzvJFIrEaZKdZX5dspjne7Puvb1_i0vtmAB0IVTK-9kQzM0MV8n8TCzMJ-UAfNhtltSFcubit9yv9sDWolgnhQWAs15AEa9z5Fn-1smf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoLocation className="service-icon" />
          </a>
          {indirizzo || info.address}
        </div>
        <div className="address">
          <BiTimeFive className="service-icon" />
          {lang === "es" ? (
            <p>Lun - Vie: {orario || info.weekday}</p>
          ) : lang === "ca" ? (
            <p>Dll - Dv: {orario || info.weekday}</p>
          ) : (
            <p>Mon - Fri: {orario || info.weekday}</p>
          )}
        </div>
      </section>
      <section className="colonna">
        <Social styleClass={`social-icons`} />
        <a href={`mailto:${email}` || `mailto:${info.email}`} className="email">
          {email || info.mail}
        </a>
        <div className="telephone-box">
          <AiOutlinePhone className="service-icon" />
          <a href={`tel:${telefono}` || `tel:${info.phone}`}>
            {telefonoSpazi || info.phone}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Footer
