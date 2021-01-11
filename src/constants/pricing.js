import React from "react"
import { FaMoneyCheck } from "react-icons/fa"
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi"



const pricing = [
  {
    id: 1,
    icon: <FaMoneyCheck className="service-icon" />,
    title: "Credit Card",
    text: [
      {
        id: 1,
        feature: "Lorem ipsum",
      },
      {
        id: 2,
        feature: "Lorem ipsum",
      },
      {
        id: 3,
        feature: "Lorem ipsum",
      },
    ],
    price: 12.5,
  },
  {
    id: 2,
    icon: <GiMoneyStack className="service-icon" />,
    title: "Ca$h",
    text: [
      {
        id: 1,
        feature: "Lorem ipsum",
      },
      {
        id: 2,
        feature: "Lorem ipsum",
      },
      {
        id: 3,
        feature: "Lorem ipsum",
      },
      {
        id: 4,
        feature: "Lorem ipsum",
      },
    ],
    price: 15,
  },
  {
    id: 3,
    icon: <GiReceiveMoney className="service-icon" />,
    title: "Saving friendly",
    text: [
      {
        id: 1,
        feature: "Lorem ipsum",
      },
      {
        id: 2,
        feature: "Lorem ipsum",
      },
    ],
    price: 9.99,
  },
  {
    id: 4,
    icon: <GiReceiveMoney className="service-icon" />,
    title: "Saving friendly",
    text: [
      {
        id: 1,
        feature: "Lorem ipsum",
      },
      {
        id: 2,
        feature: "Lorem ipsum",
      },
    ],
    price: 9.99,
  },
  {
    id: 5,
    icon: <GiReceiveMoney className="service-icon" />,
    title: "Saving friendly",
    text: [
      {
        id: 1,
        feature: "Lorem ipsum",
      },
      {
        id: 2,
        feature: "Lorem ipsum",
      },
    ],
    price: 9.99,
  },
]

const tempServices = pricing.map(service => {
  const { id, icon, title, text } = service

  let price = service.price;

  if (!Number.isInteger(price)) {
    price = price.toFixed(2)
  }

  return (
    <section key={id} className="pacchetto card">
      <div className="icone">{icon}</div>
      <ul className="testo">{
        text.map(feat => {
          const {id, feature} = feat

          return (
            <li key={id}>
              <p>{feature}</p>
            </li>
          )
        })
      }</ul>
      <h3>
        {title}: {price} €
      </h3>
    </section>
    
  )
})


export default () => {
  return tempServices
}
