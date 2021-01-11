import React from 'react'
import about from "../constants/about"


const About = () => {    const {title, desc} = about;
    return (
        <div className='about'>
            <div className='about-title'>
            <h1>{title}</h1>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default About
