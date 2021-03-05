import React, { useState, createContext } from "react"
const Context = createContext()
const Provider = ({ children }) => {
  // pupup
  const [accepted, setAccepted] = useState(false)

  React.useEffect(() => {
    if (accepted) {
      console.log("accepted: ", accepted)
    }
  }, [accepted])

  return (
    <Context.Provider value={{ accepted, setAccepted }}>
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
