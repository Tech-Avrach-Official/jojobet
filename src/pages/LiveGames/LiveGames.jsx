import React from 'react'
import LiveGameCarousel from './Components/LiveGameCarousel'
import Navbar from '@/component/Navbar'
import LiveGameSmallCarousel from './Components/LiveGameSmallCarousel'

const LiveGames = () => {
  return (
    <div>
        <Navbar/>
        <LiveGameCarousel/>
        <LiveGameSmallCarousel/>
    </div>
  )
}

export default LiveGames