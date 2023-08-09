import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import './delagalits.scss'
import National from './National'
import { fake } from '../Actions/Govs/govsActions'
import { useSelector } from 'react-redux'

const Natilist = () => {
  const [Natilists, setNatilists] = useState([])
  const state = useSelector((state) => state)

  useEffect(() => {
    axios
      .get('http://41.231.54.51/server/languages')
      .then(({ data }) => {
        setNatilists(data.list)
      })
      .catch((error) => {})
  }, [])

  const DataTable = () => {
    return Natilists.map((res, i) => {
      return <National obj={res} key={i} />
    })
  }

  return (
    <div className="table-wrapper">
      <Table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>createdAt</td>
          </tr>
        </thead>
        {fake.map((gov, index) => {
          return (
            <tr>
              <td>{gov.id}</td>
              <td>{gov.name}</td>
              <td>
                {
                  state.annonceurs.filter((annonceur) => {
                    return annonceur.govId == gov.id
                  }).length
                }
              </td>
            </tr>
          )
        })}
      </Table>
    </div>
  )
}

export default Natilist
