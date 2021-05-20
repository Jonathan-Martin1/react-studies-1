import React from 'react'
import './modal.css'

const About = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='modal'>
          <div className='modal-content'>
            <h3>I am a modal</h3>
          </div>
        </div>
      </div>
      <div
        class='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>About</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          earum?
        </p>
      </div>
    </div>
  )
}

export default About
