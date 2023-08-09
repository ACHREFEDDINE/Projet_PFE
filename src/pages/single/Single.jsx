import './single.scss'
import React, { useEffect } from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Delagalits from '../../Components/Delagalits'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import Natilist from '../../Components/Natilist'
import { useDispatch, useSelector } from 'react-redux'
import { searcherAction } from '../../Actions/Searcher/SearcherAction'
import { annonceurAction } from '../../Actions/Annonceurs/annonceurAction'
import { Box } from '@mui/material'

const Single = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { getAllSearcher } = searcherAction
  const { getAllAnnonceurs } = annonceurAction
  useEffect(() => {
    getAllAnnonceurs(dispatch, state)
    getAllSearcher(dispatch, state)
  }, [])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Row>
          <Box sx={{ width: '100%' }}>
            <h1>Annonceurs</h1>
            <Delagalits rows={state.annonceurs} />
          </Box>
          <Box
            sx={{
              width: '80%',
              marginX: '10%',
              border: '2px solid #000',
              borderRadius: '25px',
              p: '25px',
            }}
          >
            <h1>List advertiser per gov</h1>
            <Natilist />
          </Box>
        </Row>
      </div>
    </div>
  )
}

export default Single
