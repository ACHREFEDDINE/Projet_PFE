import './settings.scss'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import { styled } from '@mui/material/styles'
import MuiAlert from '@mui/material/Alert'
import TableCell from '@mui/material/TableCell'
import bcrypt from 'bcryptjs'
import TableRow from '@mui/material/TableRow'

import {
  Button,
  InputLabel,
  Snackbar,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import EnhancedTable from '../../Components/Table/EnhancedTable'
import { adminsAction } from '../../Actions/Admin/adminActions'
import { fake } from '../../Actions/Govs/govsActions'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',

  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}))

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Settings = () => {
  const dispatch = useDispatch()
  var state = useSelector((state) => state)
  var tempUser = JSON.parse(localStorage.getItem('user'))
  const [nbMonths, setNbMonths] = useState(localStorage.getItem('nbMonths'))
  const [nbRows, setNbRows] = useState(localStorage.getItem('nbRows'))
  const [message, setMessage] = useState({ text: '', severity: 'warning' })
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [firstName, setfirstName] = useState(tempUser.firstName)
  const [lastName, setlastName] = useState(tempUser.lastName)
  const [password, setpassword] = useState('')
  const [email, setemail] = useState(tempUser.email)
  const [username, setusername] = useState(tempUser.username)
  const [gov, setgov] = useState(tempUser.govId)

  const { updateProfile } = adminsAction

  useEffect(() => {
    //updateProfile(dispatch, state, user)
  }, [])

  const handleClose = (event, reason) => {
    setShowSnackbar(false)
  }

  const handleNbMonths = () => {
    if (nbMonths < 2 || nbMonths > 12) {
      setShowSnackbar(true)
      setMessage({
        severity: 'error',
        text: 'Number of months must be between 2 and 12',
      })
    } else {
      setShowSnackbar(true)
      setMessage({
        severity: 'success',
        text: 'Saved',
      })
      dispatch({ type: 'nbMonths', nbMonths: nbMonths })
    }
  }

  const handleNbRows = () => {
    if (nbRows < 1) {
      setShowSnackbar(true)
      setMessage({
        severity: 'error',
        text: 'Number of rows must be great than 1',
      })
    } else {
      setShowSnackbar(true)
      setMessage({
        severity: 'success',
        text: 'Saved',
      })
      dispatch({ type: 'nbRows', nbRows: nbRows })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    firstName != '' && (tempUser.firstName = firstName)
    lastName != '' && (tempUser.lastName = lastName)
    email != '' && (tempUser.email = email)
    username != '' && (tempUser.username = username)
    gov != '' && (tempUser.govId = gov)
    password != '' && (tempUser.password = bcrypt.hashSync(password))
    updateProfile(dispatch, state, tempUser)
    setShowSnackbar(true)
    setMessage({
      severity: 'success',
      text: 'Saved',
    })
  }

  return (
    <div className="settings">
      <Sidebar />
      <div className="settContainer">
        <Navbar />
        <Snackbar open={showSnackbar} autoHideDuration={6000}>
          <Alert
            onClose={handleClose}
            severity={message.severity}
            sx={{ width: '100%' }}
          >
            {message.text}
          </Alert>
        </Snackbar>
        <Stack sx={{ padding: 5 }} spacing={3}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Typography>Fake Data</Typography>
            <AntSwitch
              onChange={(event, checked) => {
                dispatch({ type: 'dataSource', isRealData: checked })
                if (checked) {
                  setShowSnackbar(true)
                  setMessage({
                    severity: 'warning',
                    text: 'DataBase not ready yet for real data',
                  })
                } else {
                  setShowSnackbar(true)
                  setMessage({
                    severity: 'success',
                    text: 'Saved',
                  })
                }
                setTimeout(() => {
                  window.location.reload()
                }, 800)
              }}
              defaultChecked={
                state.isRealData == 'true' || state.isRealData == true
              }
              inputProps={{ 'aria-label': 'ant design' }}
            />
            <Typography>Real Data</Typography>
          </Stack>
          <Stack
            spacing={3}
            width={500}
            direction={'row'}
            justifyContent="space-between"
          >
            <Typography>Number of rows :</Typography>
            <TextField
              sx={{
                background: 'white',
                width: '150px',
              }}
              variant="outlined"
              label="Number of rows"
              type={'number'}
              fullWidth={false}
              value={nbRows}
              onChange={(e) => {
                setNbRows(parseInt(e.target.value))
              }}
            />
            <Button
              onClick={handleNbRows}
              size="large"
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
          </Stack>

          <Stack
            spacing={3}
            width={500}
            direction={'row'}
            justifyContent="space-between"
          >
            <Typography>Number of Months</Typography>
            <TextField
              sx={{
                background: 'white',
                width: '150px',
              }}
              id="nbMonths"
              variant="outlined"
              label="Number of months"
              type={'number'}
              fullWidth={false}
              value={nbMonths}
              onChange={(e) => {
                setNbMonths(parseInt(e.target.value))
              }}
            />
            <Button
              onClick={handleNbMonths}
              size="large"
              variant="contained"
              color="success"
            >
              Confirm
            </Button>
          </Stack>
          <br />

          <div
            style={{
              padding: '10px 50px',
              background: '#e1f3e563',
              borderRadius: '50px',
            }}
          >
            <h2 style={{ textAlign: 'center' }}>edit profile</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">FirstName :</label>
              <input
                type={'text'}
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value)
                }}
              />
              <br />
              <label htmlFor="lastName">LastName :</label>
              <input
                type={'text'}
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value)
                }}
              />
              <br />
              <label htmlFor="email">Email :</label>
              <input
                type={'email'}
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
              />
              <br />
              <label htmlFor="password">Password :</label>
              <input
                type={'password'}
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value)
                }}
              />
              <br />
              <label htmlFor="username">UserName :</label>
              <input
                type={'text'}
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value)
                }}
              />
              <br />
              <label htmlFor="gov">Gov :</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setgov(e.target.value)
                }}
                value={gov}
              >
                <option value="">Select Gov</option>
                {fake.map((gov) => {
                  return (
                    <option key={gov.id} value={gov.id}>
                      {gov.name}
                    </option>
                  )
                })}
              </select>
              <br />
              <input
                type={'submit'}
                value="Confirm"
                className="btn btn-success"
              />
            </form>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default Settings
