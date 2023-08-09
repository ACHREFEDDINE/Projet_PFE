import './profile.scss'
import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { fake } from '../../Actions/Govs/govsActions'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="profile">
      <Sidebar />
      <div className="proContainer">
        <Navbar />
        <rect
          fill="#ffffff"
          class="highcharts-background"
          x="0"
          y="0"
          width="668"
          height="400"
          rx="0"
          ry="0"
        >
          <h1>Admin</h1>
          <table
            cellPadding={'25px'}
            style={{ border: '1px solid black', borderRadius: '10px' }}
          >
            <tr>
              <th>Firstname</th>
              <th>LastName</th>
              <th>email</th>
              <th>UserName</th>
              <th>Gov</th>
            </tr>
            <tr>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                {fake.find((gov) => {
                  return gov.id == user.govId
                }) != undefined
                  ? fake.find((gov) => {
                      return gov.id == user.govId
                    }).name
                  : 'not found'}
              </td>
            </tr>
          </table>
        </rect>
      </div>
    </div>
  )
}

export default Profile
