import React from "react"
import { navigate } from "@reach/router"
import Links from "../constants/links"

const InAppNav = ({ lang }) => {
  // React.useEffect(() => {
  //   // window.addEventListener("scroll", () => {})
  //   console.log(position)

  //   // return window.removeEventListener("scroll", () => {})
  // }, [position])

  return (
    <ul className="in-app-nav links">
      <li>
        <a
          href="#top"
          onClick={() => {
            navigate("#top")
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
          {lang === "es" ? "servicios" : lang === "ca" ? "serveis" : "services"}
        </a>
      </li>

      <li>
        <a
          href="#pricing"
          onClick={() => {
            navigate("#pricing")
          }}
        >
          {lang === "es" ? "tarifas" : lang === "ca" ? "tarifes" : "pricing"}
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
          {lang === "es" ? "contacto" : lang === "ca" ? "contactes" : "contact"}
        </a>
      </li>
      <Links lang={lang} />
    </ul>
  )
}

export default InAppNav
