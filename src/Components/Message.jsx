import React from 'react'
import Person from '../img/person.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Person} alt="" />
        <span>Seen</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Person} alt="" />
      </div>
    </div>
  )
}

export default Message