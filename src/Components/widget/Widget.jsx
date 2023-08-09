import './widget.scss'
import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import PersonIcon from '@material-ui/icons/Person'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import PageviewIcon from '@material-ui/icons/Pageview'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Button, Tooltip, Typography } from '@mui/material'

const Widget = ({ type, amount, diff }) => {
  const { t, i18n } = useTranslation()
  let data

  switch (type) {
    case 'annonceur':
      data = {
        title: 'annonceur',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      }
      break

    case 'chercheur':
      data = {
        title: 'chercheur',
        isMoney: false,
        link: 'view all cherchers',
        icon: (
          <PageviewIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      }
      break

    case 'ads':
      data = {
        title: 'ads',
        isMoney: false,
        link: 'See all number of ads',
        icon: (
          <CloudDownloadIcon
            className="icon"
            style={{
              backgroundColor: 'rgba(128, 0, 128, 0.2)',
              color: 'purple',
            }}
          />
        ),
      }
      break
    default:
      break
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{t(data.title)}</span>
        <span className="counter">
          {data.isMoney} {amount}
        </span>
        <Link to={`/${type}`}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <Tooltip title={t('Progress from the last month')} followCursor>
            <Box>
              <Typography>
                {diff > 0 ? '+' + diff : diff} {t(type)}
              </Typography>
              {diff > 0 ? (
                <ArrowUpwardIcon style={{ color: 'green' }} />
              ) : diff === 0 ? (
                <></>
              ) : (
                <ArrowDownwardIcon style={{ color: 'red' }} />
              )}
            </Box>
          </Tooltip>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
