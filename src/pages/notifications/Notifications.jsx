import './notifications.scss'
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'

const Notifications = () => {
  return (
    <div className='notification'>
        <Sidebar/>
    <div className='notiContainer'>
     <Navbar/>
    
    </div>    
    </div>
  )
}

export default Notifications