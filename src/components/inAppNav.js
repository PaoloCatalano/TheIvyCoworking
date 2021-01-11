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
      <Links />
      {/*
      <li> <a
        onClick={() => {
          navigate("/")
        }}
        >
        top
      </a> 
      </li>*/}
      <li>
        <a
          onClick={() => {
            navigate("#about")
          }}
        >
          about
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            navigate("#services")

            
          }}
        >
          services
        </a>
      </li>

      <li>
        <a
          onClick={() => {
            navigate("#pricing")
          }}
        >
          pricing
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            navigate("#contact")
          }}
        >
          contact
        </a>
      </li>
    </ul>
  )
}

export default InAppNav
