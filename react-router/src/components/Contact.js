import React from 'react'
import { Link } from 'react-router-dom'

const Contact = (props) => {
  return (
    <div>
      <div
        class='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/alex' className='ui header'>
          Alex
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          earum?
        </p>
      </div>
      <div
        class='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to='/willma' className='ui header'>
          Willma
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          earum?
        </p>
      </div>
    </div>
  )
}

export default Contact
