import React from "react"
import logo from "../assets/logo2.png"
import Social from "../constants/social"
import info from "../constants/contact"
import { BiTimeFive } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { AiOutlinePhone } from "react-icons/ai"
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {
  const { address, weekday, weekend, phone, email } = info
  
  //Contentful
  const {
    contentfulContatti: { indirizzo },
  } = useStaticQuery(graphql`
    {
      contentfulContatti {
        indirizzo
      }
    }
  `)

  
  return (
    <div className="footer">
      <section className="colonna">
        <img src={logo} alt="logo" className="logo" />
      </section>
      <section className="colonna">
        <div className="address">
          <a
            href="https://www.google.com/maps/dir/51.897107,-8.4704763/41.4095833,2.1855948/@47.0566327,-11.4749245,5z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
            target="_blank"
            // rel="noopener noreferrer"
          >
          <GoLocation className="service-icon" />
          </a>
          {indirizzo}
        </div>
        <div className="address">
          <BiTimeFive className="service-icon" />
          <p>{weekday}</p>
          <p>{weekend}</p>
        </div>
      </section>
      <section className="colonna">
        <Social styleClass={`social-icons`} />
        <p className="email">{email}</p>
        <AiOutlinePhone className="service-icon" />
        <p>{phone}</p>
      </section>
    </div>
  )
}

export default Footer
