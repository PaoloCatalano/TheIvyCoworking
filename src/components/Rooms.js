import React from "react"
import rooms from "../constants/rooms"

const Rooms = () => {
  return (
    <div>
      {rooms.map(room => {
        const { id, url, name, desc } = room
        let pari = true
        if (id % 2 !== 0) {
          pari = false
        }

        
        return (
            <section key={id} className="card-stanza">
              <div className="contenitore">
                <img
                  src={url}
                  alt={name}
                  className={`box img-stanza ${pari && "reverse"}`}
                />
                <div className={`box desc ${pari && "right"}`}>
                  <h2 className="titolo">{name}</h2>
                  {desc.map(feat => {
                    const { id, feature } = feat

                    return (
                      <li key={id}>
                        <p>{feature}</p>
                      </li>
                    )
                  })}
                </div>
              </div>
            </section>
        )
      })}
    </div>
  )
}

export default Rooms
