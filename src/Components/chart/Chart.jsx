import './chart.scss'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
var data = []

const fakeAds = []

const Chart = ({ aspect, title }) => {
  const state = useSelector((state) => state)
  const { t } = useTranslation()
  const [d, setD] = useState([])

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  useEffect(() => {
    data = []
    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    for (let index = parseInt(state.nbMonths); index > 0; index--) {
      if (month - index < 0) {
        year = new Date().getFullYear() - 1
      }
      data.push({
        name:
          month - index < 0
            ? months[month - index + 12]
            : months[month - index],
        Total: state.ads.filter((ad) => {
          return (
            new Date(ad.createdAt).getMonth() ==
              (month - index < 0 ? month - index + 12 : month - index) &&
            new Date(ad.createdAt).getFullYear() == year
          )
        }).length,
      })
    }
    setD(data)
    console.log(data)
  }, [])

  useEffect(() => {
    data = []
    var year = new Date().getFullYear()
    var month = new Date().getMonth()
    for (let index = parseInt(state.nbMonths) - 1; index >= 0; index--) {
      if (month - index < 0) {
        year = new Date().getFullYear() - 1
      }
      if (month - index < 0) {
        year = new Date().getFullYear() - 1
      } else {
        year = new Date().getFullYear()
      }
      data.push({
        name:
          month - index < 0
            ? months[month - index + 12] + ' ' + year + ''
            : months[month - index] + ' ' + year + '',
        Total: state.ads.filter((ad) => {
          return (
            new Date(ad.createdAt).getMonth() ==
              (month - index < 0 ? month - index + 12 : month - index) &&
            new Date(ad.createdAt).getFullYear() == year
          )
        }).length,
      })
    }
    setD(data)
    console.log(data)
  }, [state.ads])

  return (
    <div className="chart">
      <div className="title">{t('ads')}</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={d}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
