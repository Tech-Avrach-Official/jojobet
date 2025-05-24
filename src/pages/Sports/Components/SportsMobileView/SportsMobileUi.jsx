import React from 'react'
import SportsSubMenu from './SportsSubMenu'
import SportsMobCarousel from './SportsMobCarousel'
import SportsCarousel from '../SportsCarousel'
import SportsCarouselMiddle from '../SportsCarouselMiddle'
import LiveUpcomingMob from './LiveUpcomingMob/LiveUpcomingMob'
import TabBottomBar from './TabBottomBar'

const SportsMobileUi = () => {
  return (
    <div className='w-full h-full bg-[#1E1E20]'>
        <SportsSubMenu/>
        <SportsCarousel/>
        <SportsCarouselMiddle/>
        <LiveUpcomingMob/>
        <div className='sticky bottom-0'>
          <TabBottomBar/>
        </div>
        {/* <SportsMobCarousel/> */}
    </div>
  )
}

export default SportsMobileUi