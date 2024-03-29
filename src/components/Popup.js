import React, { useContext } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { Context } from "../context/context"

const Popup = () => {
  const { setDisabled } = useContext(Context)
  const location = useLocation()

  return (
    <CookieConsent
      overlay
      overlayClasses="overlayClasses"
      containerClasses="containerClasses"
      buttonWrapperClasses="buttonWrapperClasses"
      buttonClasses="buttonClasses"
      style={comStyle}
      contentStyle={{ margin: 0 }}
      buttonStyle={buttonStyle}
      expires={90}
      cookieName="gatsby-gdpr-facebook-pixel"
      flipButtons
      ariaAcceptLabel
      onAccept={() => {
        Cookies.set("gatsby-gdpr-google-tagmanager", true)
        Cookies.set("gatsby-gdpr-google-analytics", true)
        initializeAndTrack(location)
        setDisabled(false)
        console.log("Cookies accepted")
      }}
      location="bottom"
      buttonText="ACEPTA"
      sameSite="none"
      cookieSecurity
      enableDeclineButton
      declineButtonText="no"
      ariaDeclineLabel
      declineButtonStyle={{
        padding: 5,
        margin: 0,
        textTransform: "lowercase",
        backgroundColor: "#2B373B",
      }}
      onDecline={() => {
        console.log("Cookies not accepted")
      }}
    >
      <div className="logo-cookie">
        <div>
          <div className="title-navbar fixed">
            the <span>ivy</span> coworking
          </div>
        </div>
      </div>
      <div className="notice">
        Esta web utiliza cookies. Acepta antes de utilizar nuestra web.{" "}
        <span style={{ fontSize: "10px" }}>
          Al utilizar este sitio, acepta nuestros{" "}
          <Link style={{ color: "#7aaec2" }} to="/privacy-policy/">
            POLÍTICA DE COOKIES
          </Link>
          .
        </span>
      </div>
    </CookieConsent>
  )
}
const comStyle = {
  alignItems: "baseline",
  background: "#fff",
  color: "white",
  zIndex: 999,
  position: "static",
  width: "60vw",
  display: "grid",
  grid: "auto auto / 1fr",
}
const buttonStyle = {
  borderRadius: 0,
  margin: 15,
  background: "rgb(255, 212, 45)",
  color: "#4e503b",
  fontSize: "14px",
  fontWeight: "bold",
  width: "90%",
  height: "3rem",
}
export default Popup
