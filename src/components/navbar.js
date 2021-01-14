import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import InAppNav from "../components/inAppNav"
import Social from "../constants/social"
import info from "../constants/contact"
import about from "../constants/about"


const Navbar = () => {
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


  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div
            onClick={() => {
              setShowLinks(false)
            }}
          ></div>
          <div className='title-navbar'>
            {about.title}
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars className={`icone small ${showLinks && "icone-active"}`} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <div
            ref={linksRef}
            onClick={() => {
              setShowLinks(false)
            }}
          >
            <InAppNav />
          </div>
        </div>
        <section>
          <Social styleClass={`social-icons social-icons-navbar`} />
          <p className="email email-nav">{info.email}</p>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
