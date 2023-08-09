import './home.scss'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Widget from '../../Components/widget/Widget'
import Chart from '../../Components/chart/Chart'
import Feature from '../../Components/feature/Feature'
import { useDispatch, useSelector } from 'react-redux'
import { searcherAction } from '../../Actions/Searcher/SearcherAction'
import { adsAction } from '../../Actions/Ads/useAction'
import { annonceurAction } from '../../Actions/Annonceurs/annonceurAction'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const { getAllSearcher } = searcherAction
  const { getAllAds } = adsAction
  const { getAllAnnonceurs } = annonceurAction

  useEffect(() => {
    getAllAnnonceurs(dispatch, state)
    getAllSearcher(dispatch, state)
    getAllAds(dispatch, state)
  }, [])

  const CalculDiff = (array) => {
    var month = new Date().getMonth()
    var year = new Date().getFullYear()
    var thisMonth = array.filter((obj) => {
      return (
        new Date(obj.createdAt).getMonth() == month &&
        new Date(obj.createdAt).getFullYear() == year
      )
    }).length
    if (month > 0) {
      var previousMonth = array.filter((obj) => {
        return (
          new Date(obj.createdAt).getMonth() == month - 1 &&
          new Date(obj.createdAt).getFullYear() == year
        )
      }).length
      return thisMonth - previousMonth
    } else {
      var previousMonth = array.filter((obj) => {
        return (
          new Date(obj.createdAt).getMonth() == 11 &&
          new Date(obj.createdAt).getFullYear() == year - 1
        )
      }).length
      console.log(thisMonth, previousMonth)
      return thisMonth - previousMonth
    }
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget
            amount={state.annonceurs.length}
            diff={CalculDiff(state.annonceurs)}
            type="annonceur"
          />
          <Widget
            amount={state.chercheurs.length}
            diff={CalculDiff(state.chercheurs)}
            type="chercheur"
          />
          <Widget
            amount={state.ads.length}
            diff={CalculDiff(state.ads)}
            type="ads"
          />
        </div>
        <div className="charts">
          <Feature />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home
