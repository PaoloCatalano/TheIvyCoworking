import React from "react"
import Image from "gatsby-image"
import { AiFillStar } from "react-icons/ai"

const Review = ({ fluid, uno, due, tre, quattro, cinque, name, comment }) => {
  return (
    <div className="review">
      <Image fluid={fluid} style={{ width: 130, margin: "0.5rem" }} />
      <h1>{name}</h1>
      <div style={{ margin: "0.5rem" }}>
        <AiFillStar
          className={`${cinque || quattro || tre || due || uno ? "on" : "off"}`}
        />
        <AiFillStar
          className={`${cinque || quattro || tre || due ? "on" : "off"}`}
        />
        <AiFillStar className={`${cinque || quattro || tre ? "on" : "off"}`} />
        <AiFillStar className={`${cinque || quattro ? "on" : "off"}`} />
        <AiFillStar className={`${cinque ? "on" : "off"}`} />
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default Review
