import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwqAOWiJPnTwYbwKNMgSXcOPO9lrlkvzylQ&usqp=CAU" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar