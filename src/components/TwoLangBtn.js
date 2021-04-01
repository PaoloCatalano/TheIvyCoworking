import React from "react"

const LanguageButton = ({ eng, setEng }) => {
  return (
    <div className="btn-container-flex-static">
      <button
        style={{
          color: `${eng ? "#ddbea9" : "#457f96"}`,
          textDecoration: `${eng ? "underline" : "none"}`,
          fontWeight: "bold",
        }}
        onClick={() => {
          setEng(true)
        }}
      >
        en
      </button>
      <button
        style={{
          color: `${eng ? "#457f96" : "#ddbea9"}`,
          textDecoration: `${eng ? "none" : "underline"}`,
          fontWeight: "bold",
        }}
        onClick={() => {
          setEng(false)
        }}
      >
        es
      </button>
    </div>
  )
}

export default LanguageButton
