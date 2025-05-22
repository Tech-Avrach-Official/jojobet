import React, { useState } from 'react'
import SportsCarousel from './SportsCarousel'
import SportsCarouselMiddle from './SportsCarouselMiddle'
import LiveUpcoming from './LiveUpcoming/LiveUpcoming';

const SportsMiddle = () => {
  const [activeTab, setActiveTab] = useState("live");
  return (
    <div className='px-2 bg-[#1E1E20]'>
        <SportsCarousel/>
        <SportsCarouselMiddle/>
        <LiveUpcoming/>
    </div>
  )
}

export default SportsMiddle