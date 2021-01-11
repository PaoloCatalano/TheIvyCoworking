import React from "react"
import { FaPlaystation, FaJava, FaAccessibleIcon } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaPlaystation className="service-icon" />,
    title: "Gaming",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum id repudiandae saepe labore ipsa libero, eos voluptatibus asperiores dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis quod eos similique corporis eveniet tempora ex maxime recusandae accusantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum id repudiandae saepe labore ipsa libero, eos voluptatibus asperiores dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis quod eos similique corporis eveniet tempora ex maxime recusandae accusantium.`,
  },
  {
    id: 2,
    icon: <FaJava className="service-icon" />,
    title: "Coding",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto mollitia cupiditate saepe harum ipsum! Repellendus beatae officiis illo perspiciatis unde velit optio corrupti? Delectus rerum, non corrupti iusto natus sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum id repudiandae saepe labore ipsa libero, eos voluptatibus asperiores dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis quod eos similique corporis eveniet tempora ex maxime recusandae accusantium.`,
  },
  {
    id: 3,
    icon: <FaAccessibleIcon className="service-icon" />,
    title: "Disabilities friendly",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque et maxime, neque amet autem voluptates aperiam voluptatum ex deleniti labore inventore consequatur vddcvctate dolore tempora omnis? Magnam dicta blanditiis excepturi pariatur. Mollitia repudiandae expedita magnitudo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum id repudiandae saepe labore ipsa libero, eos voluptatibus asperiores dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis quod eos similique corporis eveniet tempora ex maxime recusandae accusantium.`,
  },
]

const tempServices = data.map(service => {
  const { id, icon, title, text } = service
  return (
    
      <section key={id} className="service">
        <div className="icone">{icon}</div>
        <h4>{title}</h4>
        <p className='testo'>{text}</p>
      </section>
    
  )
})

export default () => {
  return tempServices
}
