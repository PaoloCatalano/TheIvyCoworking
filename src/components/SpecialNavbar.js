import React from "react"
import Social from "../constants/social"
import info from "../constants/contact"
import about from "../constants/about"
import { GoArrowLeft } from "react-icons/go"
import { Link, useStaticQuery, graphql } from "gatsby"
import Popup from "../components/Popup"
import PopupSmall from "../components/PopupSmall"

const SpecialNavbar = ({ esp, cat, smallPopup }) => {
  const {
    contentfulContatti: { email },
  } = useStaticQuery(graphql`
    {
      contentfulContatti {
        email
      }
    }
  `)

  return (
    <nav className="navbar">
      {smallPopup ? <PopupSmall /> : <Popup />}

      <div className="nav-center">
        <div className="nav-header">
          <div className="title-navbar fixed">{about.title}</div>
        </div>
        <div>
          <button className="btn">
            {esp ? (
              <Link to="/es/home">
                <GoArrowLeft className="arrow" />
                volver a home
              </Link>
            ) : cat ? (
              <Link to="/ca/home">
                <GoArrowLeft className="arrow" />
                tornar a home
              </Link>
            ) : (
              <Link to="/">
                <GoArrowLeft className="arrow" />
                back to home
              </Link>
            )}
          </button>
        </div>
        <section>
          <Social styleClass={`social-icons social-icons-navbar`} />
          <a
            href={`mailto:${email}` || `mailto:${info.email}`}
            className="email email-nav"
          >
            {email || info.mail}
          </a>
        </section>
      </div>
    </nav>
  )
}

export default SpecialNavbar
