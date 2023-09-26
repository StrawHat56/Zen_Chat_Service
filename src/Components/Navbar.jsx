import React from 'react'
import person from '../img/person.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Zen Chat</span>
      <div className='user'>
        <img src={person} alt="" />
        <span>Ansh</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar