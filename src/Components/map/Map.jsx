import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adsAction } from '../../Actions/Ads/useAction'
import ChoroplethMap from '../ChoroplethMap'

const Map = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { getAllAds } = adsAction

  useEffect(() => {
    getAllAds(dispatch, state)
  }, [])

  let data = [
    [
      'TO',
      state.ads.filter((ad) => {
        return ad.govId === '6137e4461c73eb28103c21e0'
      }).length,
    ],
    [
      'MN',
      state.ads.filter((ad) => {
        return ad.govId === '6137df651c73eb28103c19a4'
      }).length,
    ],
    [
      'BJ',
      state.ads.filter((ad) => {
        return ad.govId === '6137d9d41c73eb28103c104e'
      }).length,
    ],
    [
      'BA',
      state.ads.filter((ad) => {
        return ad.govId === '6137daa21c73eb28103c118e'
      }).length,
    ],
    [
      'BZ',
      state.ads.filter((ad) => {
        return ad.govId === '6137db681c73eb28103c12d8'
      }).length,
    ],
    [
      'JE',
      state.ads.filter((ad) => {
        return ad.govId === '6137dceb1c73eb28103c1573'
      }).length,
    ],
    [
      'NB',
      state.ads.filter((ad) => {
        return ad.govId === '6137e0a91c73eb28103c1bc7'
      }).length,
    ],
    [
      'TU',
      state.ads.filter((ad) => {
        return ad.govId === '6137e4701c73eb28103c222a'
      }).length,
    ],
    [
      'KF',
      state.ads.filter((ad) => {
        return ad.govId === '6137de4f1c73eb28103c17d9'
      }).length,
    ],
    [
      'KS',
      state.ads.filter((ad) => {
        return ad.govId === '6137ddba1c73eb28103c16da'
      }).length,
    ],
    [
      'GB',
      state.ads.filter((ad) => {
        return ad.govId === '6137dc041c73eb28103c13e2'
      }).length,
    ],
    [
      'GF',
      state.ads.filter((ad) => {
        return ad.govId === '6137dc7c1c73eb28103c14b0'
      }).length,
    ],
    [
      'SZ',
      state.ads.filter((ad) => {
        return ad.govId === '6137e2641c73eb28103c1eab'
      }).length,
    ],
    [
      'SF',
      state.ads.filter((ad) => {
        return ad.govId === '6137e1941c73eb28103c1d4d'
      }).length,
    ],
    [
      'SL',
      state.ads.filter((ad) => {
        return ad.govId === '6137e30b1c73eb28103c1fc2'
      }).length,
    ],
    [
      'MH',
      state.ads.filter((ad) => {
        return ad.govId === '6137def71c73eb28103c18ea'
      }).length,
    ],
    [
      'MS',
      state.ads.filter((ad) => {
        return ad.govId === '6137e0341c73eb28103c1b00'
      }).length,
    ],
    [
      'KR',
      state.ads.filter((ad) => {
        return ad.govId === '6137dd561c73eb28103c162c'
      }).length,
    ],
    [
      'SS',
      state.ads.filter((ad) => {
        return ad.govId === '6137e38c1c73eb28103c2097'
      }).length,
    ],
    [
      'ZA',
      state.ads.filter((ad) => {
        return ad.govId === '6137e4f21c73eb28103c2311'
      }).length,
    ],
    [
      'ME',
      state.ads.filter((ad) => {
        return ad.govId === '6137dfbf1c73eb28103c1a3a'
      }).length,
    ],
    [
      'KB',
      state.ads.filter((ad) => {
        return ad.govId === '6137de1b1c73eb28103c1780'
      }).length,
    ],
    [
      'TA',
      state.ads.filter((ad) => {
        return ad.govId === '6137e3fd1c73eb28103c215e'
      }).length,
    ],
  ]

  return (
    <div
      style={{
        height: '10vh',
        width: '15vw',
      }}
    >
      <ChoroplethMap data={data} />
    </div>
  )
}

export default Map
