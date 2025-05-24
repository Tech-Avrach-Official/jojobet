import React from 'react'
import LiveGameCarousel from './Components/LiveGameCarousel'
import Navbar from '@/component/Navbar'
import LiveGameSmallCarousel from './Components/LiveGameSmallCarousel'
import GameGrid from './Components/GameGrid'
import Footer from '@/component/footer'

const LiveGames = () => {
  return (
    <div>
        <Navbar/>
        <LiveGameCarousel/>
        <LiveGameSmallCarousel/>
        <GameGrid />
        <Footer />
    </div>
  )
}

export default LiveGames