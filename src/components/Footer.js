import React from "react"
import logo from "../assets/logo2.png"
import Social from "../constants/social"
import info from "../constants/contact"
import { BiTimeFive } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { AiOutlinePhone } from "react-icons/ai"


const Footer = () => {
  const { address, weekday, weekend, phone, email } = info

  return (
    <div className="footer">
      <section className="colonna">
        <img src={logo} alt="logo" className="logo" />
      </section>
      <section className="colonna">
        <div className="address">
          <GoLocation className="service-icon" />
          {address}
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
