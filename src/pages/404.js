import React from "react"
import SpecialNavbar from "../components/SpecialNavbar"
import Footer from "../components/Footer"

const Error = () => {
  return (
    <div className="error-page">
      <SpecialNavbar/>
        <p className="error-paragraph">sorry, this ivy page doesn't exist!</p>
      <Footer/>
    </div>
  )
}

export default Error
