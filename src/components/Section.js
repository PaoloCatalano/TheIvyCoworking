import React from 'react'

const Section = ({title}) => {

    return (
      <div className='section'>
        <h1 className="depth" title={title}>
          <div className='section-title'>
          {title}


          </div>
          </h1>
      </div>
    )
}

export default Section
