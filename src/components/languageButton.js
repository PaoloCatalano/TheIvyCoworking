import React from "react"
import { Link } from "gatsby"

const LanguageButton = () => {
  return (
    <div className="btn-container">
      <button>
        <Link to="/" activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}>
          en
        </Link>
      </button>
      <button>
        <Link
          to="/es/home"
          activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}
        >
          es
        </Link>
      </button>
      <button>
        <Link
          to="/ca/home"
          activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}
        >
          ca
        </Link>
      </button>
    </div>
  )
}

export default LanguageButton
