import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent, { Cookies } from "react-cookie-consent"

const Popup = () => {
  const location = useLocation()

  return (
    <CookieConsent
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "14px", fontWeight: "bold" }}
      expires={150}
      cookieName="gatsby-gdpr-facebook-pixel"
      flipButtons
      ariaAcceptLabel
      onAccept={() => {
        initializeAndTrack(location)
        console.log("Cookies accepted")
      }}
      location="bottom"
      buttonText="ACEPTA"
      enableDeclineButton
      declineButtonText="no"
      ariaDeclineLabel
      declineButtonStyle={{
        padding: 5,
        margin: 9,
        textTransform: "capitalize",
        backgroundColor: "#2B373B",
      }}
      onDecline={() => {
        console.log("Cookies not accepted")
      }}
    >
      Esta web utiliza cookies. Acepta antes de utilizar nuestra web.{" "}
      <span style={{ fontSize: "10px" }}>
        Al utilizar este sitio, acepta nuestros{" "}
        <Link style={{ color: "#7aaec2" }} to="/privacy-policy/">
          POLÍTICA DE COOKIES
        </Link>
        .
      </span>
    </CookieConsent>
  )
}

export default Popup
