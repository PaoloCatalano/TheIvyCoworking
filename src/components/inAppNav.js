import React from "react"
import { navigate } from "@reach/router"
import Links from "../constants/links"

const InAppNav = () => {
  // React.useEffect(() => {
  //   // window.addEventListener("scroll", () => {})
  //   console.log(position)

  //   // return window.removeEventListener("scroll", () => {})
  // }, [position])

  return (
    <ul className="in-app-nav links">
      <li>
        <a
          href="/"
          onClick={() => {
            navigate("/")
          }}
        >
          home
        </a>
      </li>

      <li>
        <a
          href="#services"
          onClick={e => {
            navigate("#services")
          }}
        >
          services
        </a>
      </li>

      <li>
        <a
          href="#pricing"
          onClick={() => {
            navigate("#pricing")
          }}
        >
          pricing
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => {
            navigate("#about")
          }}
        >
          about
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => {
            navigate("#contact")
          }}
        >
          contact
        </a>
      </li>
      <Links />
    </ul>
  )
}

export default InAppNav
