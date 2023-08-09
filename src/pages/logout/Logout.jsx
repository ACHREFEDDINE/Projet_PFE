import './logout.scss'
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'

const Logout = () => {
  return (
    <div className='logout'>
    <Sidebar/>
    <div className="logContainer">
       <Navbar/>
       logout 
       </div>
       </div>
  )
}

export default Logout