import Navbar from '@/component/Navbar'
import GameScreen from '@/pages/GameScreen/GameScreen'
import LiveGameCarousel from '@/pages/LiveGames/Components/LiveGameCarousel'
import LiveGames from '@/pages/LiveGames/LiveGames'
import Promotion from '@/pages/Promotion/promotion'
import RequestDiscount from '@/pages/RequestDiscount/RequestDiscount'
import Sports from '@/pages/Sports/Sports'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <>
    {/* <Navbar />
    <LiveGameCarousel /> */}
    <Routes>
        {/* <Route path='/' element={<h1>Home</h1>} /> */}
        <Route path='/' element={<Sports/>} />
        <Route path='/live-games' element={<LiveGames/>} />
        <Route path="/promption" element={<Promotion />} />
        <Route path='/aviator' element={<GameScreen/>} />
        <Route path='/poker-klas' element={<GameScreen/>} />
        <Route path="live-looto" element={<GameScreen/>} />
        <Route path="request-discount" element={<RequestDiscount/>} />

    </Routes>
    </>
    
  )
}

export default AllRoutes