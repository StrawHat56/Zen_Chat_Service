import React from 'react'
import person from '../img/person.jpg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Avaneesh</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Avaneesh</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
      <div className="userChat">
        <img src={person} alt="" />
        <div className="userChatInfo">
          <span>Avaneesh</span>
          <p>Hey, how are you?</p>
        </div>
      </div>
    </div>
  )
}

export default Chats