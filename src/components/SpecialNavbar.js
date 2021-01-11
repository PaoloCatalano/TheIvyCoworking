import React from "react"
import Social from "../constants/social"
import info from "../constants/contact"
import about from "../constants/about"
import { Link } from "gatsby"
import { GoArrowLeft } from "react-icons/go"

const SpecialNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="title-navbar fixed">{about.title}</div>
        </div>
        <div>
          <button className="btn">
            <Link to="/">
              <GoArrowLeft className="arrow" />
               back to home
            </Link>
          </button>
        </div>
        <section>
          <Social styleClass={`social-icons social-icons-navbar`} />
          <p className="email email-nav">{info.email}</p>
        </section>
      </div>
    </nav>
  )
}

export default SpecialNavbar
