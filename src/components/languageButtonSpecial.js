import React from "react"
import { Link } from "gatsby"

const LanguageButtonSpecial = () => {
  return (
    <div className="btn-container-flex">
      <button>
        <Link
          to="/ca/gallery/"
          activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}
        >
          ca
        </Link>
      </button>
      <button>
        <Link
          to="/es/fotos/"
          activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}
        >
          es
        </Link>
      </button>
      <button>
        <Link
          to="/gallery/"
          activeStyle={{ color: "#ddbea9", fontWeight: "bold" }}
        >
          en
        </Link>
      </button>
    </div>
  )
}

export default LanguageButtonSpecial
