import React, { useState, createContext } from "react"
import { Cookies } from "react-cookie-consent"

const Context = createContext()
const Provider = ({ children }) => {
  // pupup
  const [disabled, setDisabled] = useState(
    !Cookies.get("gatsby-gdpr-google-tagmanager")
  )

  React.useEffect(() => {
    console.log("disabled: ", disabled)
  }, [disabled])

  return (
    <Context.Provider value={{ disabled, setDisabled }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
