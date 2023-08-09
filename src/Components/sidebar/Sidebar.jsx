import './sidebar.scss'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PageviewIcon from '@material-ui/icons/Pageview'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkmodeContext'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@mui/material'
const Sidebar = () => {
  const { t, i18n } = useTranslation()
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Misra</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">{t('main')}</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>{t('dashboard')}</span>
            </li>
          </Link>
          <Link to="/annonceur" style={{ textDecoration: 'none' }}>
            <li>
              <PersonAddIcon className="icon" />
              <span>{t('annonceur')}</span>
            </li>
          </Link>
          <Link to="/chercheur" style={{ textDecoration: 'none' }}>
            <li>
              <PageviewIcon className="icon" />
              <span>{t('chercheur')}</span>
            </li>
          </Link>
          <Link to="/ads" style={{ textDecoration: 'none' }}>
            <li>
              <ControlPointIcon className="icon" />
              <span>{t('ads')}</span>
            </li>
          </Link>
          <p className="title">{t('service')}</p>
          <Link to="/notification" style={{ textDecoration: 'none' }}>
            <li>
              <NotificationsActiveIcon className="icon" />
              <span>{t('notification')}</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <li>
              <SettingsIcon className="icon" />
              <span>{t('setting')}</span>
            </li>
          </Link>
          <p className="title">{t('user')}</p>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <li>
              <AccountBoxIcon className="icon" />
              <span>{t('profile')}</span>
            </li>
          </Link>
          <IconButton
            onClick={() => {
              localStorage.setItem('user', null)
              window.location.assign('/')
            }}
          >
            <li>
              <ExitToAppIcon className="icon" />
              <span>{t('logout')}</span>
            </li>
          </IconButton>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
