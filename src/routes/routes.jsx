import LiveGameCarousel from '@/pages/LiveGames/Components/LiveGameCarousel'
import LiveGames from '@/pages/LiveGames/LiveGames'
import Sports from '@/pages/Sports/Sports'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<h1>Home</h1>} /> */}
        <Route path='/' element={<Sports/>} />
        <Route path='/live-games' element={<LiveGames/>} />

    </Routes>
  )
}

export default AllRoutes