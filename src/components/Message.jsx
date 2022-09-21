import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqAOWiJPnTwYbwKNMgSXcOPO9lrlkvzylQ&usqp=CAU"
          alt=""
        />
        <span>Just Now</span>
      </div>



      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqAOWiJPnTwYbwKNMgSXcOPO9lrlkvzylQ&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Message