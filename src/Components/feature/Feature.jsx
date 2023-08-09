import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Feature = () => {
  const state = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    var sum = 0
    state.ads.map((ad) => {
      sum += ad.price
    })
    setTotalAmount(sum)
  }, [state.ads])
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title"> Statistique </h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featureChart">
          <CircularProgressbar
            value={(
              (state.ads.filter((ad) => {
                return ad.status == 1
              }).length /
                state.ads.length) *
              100
            ).toFixed(2)}
            text={
              (
                (state.ads.filter((ad) => {
                  return ad.status == 1
                }).length /
                  state.ads.length) *
                100
              ).toFixed(2) + '%'
            }
            strokeWidth={5}
          />
        </div>
        <p className="title">Valid ads</p>

        <p className="amount">{totalAmount} TND</p>
        <p className="desc">
          Previous transactions processing .All payments are included.
        </p>
        {/* <div className="summary">
          <div className="item">
            <div className="itemTitle">but</div>
            <div className="itemResulat">
              <TrendingUpIcon />
              <div className="itemAmount">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Feature
