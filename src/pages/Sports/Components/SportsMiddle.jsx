import React from 'react'
import SportsCarousel from './SportsCarousel'
import SportsCarouselMiddle from './SportsCarouselMiddle'

const SportsMiddle = () => {
  return (
    <div className='border border-red-500'>
        <SportsCarousel/>
        <SportsCarouselMiddle/>
    </div>
  )
}

export default SportsMiddle