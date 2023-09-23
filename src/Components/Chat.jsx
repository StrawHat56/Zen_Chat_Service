import React from 'react'
import videochat from '../img/cam.png'
import add from '../img/add.png'
import settings from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Elias</span>
        <div className="chatIcons">
          <img src={videochat} alt="" />
          <img src={add} alt="" />
          <img src={settings} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat