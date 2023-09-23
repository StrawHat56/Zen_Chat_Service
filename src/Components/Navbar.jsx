import React from 'react'
import person from '../img/person.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Zen Chat</span>
      <div className='user'>
        <img src={person} alt="" />
        <span>Ansh</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar