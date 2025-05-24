import Navbar from '@/component/Navbar'
import GameScreen from '@/pages/GameScreen/GameScreen'
import LiveGameCarousel from '@/pages/LiveGames/Components/LiveGameCarousel'
import LiveGames from '@/pages/LiveGames/LiveGames'
import Promotion from '@/pages/Promotion/promotion'
import RequestDiscount from '@/pages/RequestDiscount/RequestDiscount'
import Sports from '@/pages/Sports/Sports'
import Tournaments from '@/pages/Tournaments/Tournaments'
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LiveSports from '@/pages/LiveSports/LiveSports'
import LiveCashino from '@/pages/LiveCasino/LiveCasino'

const AllRoutes = () => {
  return (
    <>
    {/* <Navbar />
    <LiveGameCarousel /> */}
    <Routes>
        {/* <Route path='/' element={<h1>Home</h1>} /> */}
        <Route path='/' element={<Sports/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/live-games' element={<LiveGames/>} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path='/aviator' element={<GameScreen/>} />
        <Route path='/poker-klas' element={<GameScreen/>} />
        <Route path="live-looto" element={<GameScreen/>} />
        <Route path="request-discount" element={<RequestDiscount/>} />
        <Route path="tournaments" element={<Tournaments/>} />
        <Route path='/game-screen' element={<GameScreen/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path="/live-sports" element={<LiveSports/>} />
        <Route path='/live-casino' element={<LiveCashino/>} />
    </Routes>
    </>
    
  )
}

export default AllRoutes