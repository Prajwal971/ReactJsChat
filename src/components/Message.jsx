import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(message)
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img
          src=
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqAOWiJPnTwYbwKNMgSXcOPO9lrlkvzylQ&usqp=CAU" alt="" />
      </div> */}
    </div>
  )
}

export default Message