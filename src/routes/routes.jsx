import Sports from '@/pages/Sports/Sports'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/sports' element={<Sports/>} />
    </Routes>
  )
}

export default AllRoutes