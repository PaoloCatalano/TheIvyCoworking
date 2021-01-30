import React from "react"
import rooms from "../constants/rooms"

const Rooms = () => {
  return (
    <div>
      {rooms.map(room => {
        const { id, url, name, url2 } = room
        let pari = true
        if (id % 2 !== 0) {
          pari = false
        }

        return (
          <section key={id} className="card-stanza ">
            <div className="contenitore">
              <img src={url} alt={name} className="box img stanza" />
              <div className={`box desc ${pari && "pink-title"}`}>
                <h2 className="titolo">{name}</h2>
              </div>
              <img src={url2} alt={name} className="box img2 stanza" />
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Rooms
