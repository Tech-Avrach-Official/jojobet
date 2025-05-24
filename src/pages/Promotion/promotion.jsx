import React from 'react'
import PromotionsGrid from './Components/CardGrid'
import LiveGameCarousel from '../LiveGames/Components/LiveGameCarousel';
import LiveGameSmallCarousel from '../LiveGames/Components/LiveGameSmallCarousel';
import Navbar from '@/component/Navbar';

const Promotion = () => {
  return (
    <div>
        <Navbar/>
        <LiveGameCarousel/>
        <LiveGameSmallCarousel/>
        <PromotionsGrid />
    </div>
  )
}

export default Promotion;