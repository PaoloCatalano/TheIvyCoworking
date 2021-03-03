import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import InAppNav from "../components/inAppNav"
import LanguageButton from "../components/languageButton"
import Social from "../constants/social"
import info from "../constants/contact"
import about from "../constants/about"
import { useStaticQuery, graphql } from "gatsby"
import Popup from "../components/Popup"

const Navbar = ({ lang }) => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = "0px"
    }
  }, [showLinks])

  const {
    contentfulContatti: { email },
  } = useStaticQuery(graphql`
    {
      contentfulContatti {
        email
      }
    }
  `)

  // pupup
  const [clicked, setClicked] = useState(false)

  return (
    <nav className="navbar">
      <Popup setClicked={setClicked} clicked={clicked} />

      <div className="nav-center">
        <div className="nav-header">
          <div
            aria-label="navbar"
            role="button"
            tabIndex="0"
            onClick={() => {
              setShowLinks(false)
            }}
            onKeyDown={() => {
              setShowLinks(false)
            }}
          ></div>
          <div className="title-navbar">{about.title}</div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars className={`icone small ${showLinks && "icone-active"}`} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div ref={linksRef} className="linkElang">
            <div
              aria-label="navbar"
              role="button"
              tabIndex="0"
              onClick={() => {
                setShowLinks(false)
              }}
              onKeyDown={() => {
                setShowLinks(false)
              }}
            >
              <InAppNav lang={lang} />
            </div>
            <LanguageButton />
          </div>
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

export default Navbar
