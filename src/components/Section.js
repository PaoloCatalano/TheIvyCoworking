import React from 'react'

const Section = ({title}) => {

  
    return (
      <div className='section'>
        <h1 className="depth" title={title}>{title}</h1>
      </div>
    )
}

export default Section
