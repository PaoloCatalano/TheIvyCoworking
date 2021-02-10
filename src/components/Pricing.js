import React from "react"
// import Prezzi from '../constants/pricing'
import CardPrezzi from "../components/CardPrezzi"
import CardPrezziEsp from "../components/CardPrezziEsp"

const Pricing = ({ esp, cat }) => {
  return (
    <div className="contenitore-pacchetti">
      {esp ? <CardPrezziEsp /> : cat ? <CardPrezziEsp cat /> : <CardPrezzi />}
    </div>
  )
}

export default Pricing
