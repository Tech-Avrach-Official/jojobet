import React from 'react'
import SportsLeft from './SportsLeft'
import SportsMiddle from './SportsMiddle'
import SportsRight from './SportsRight'

const SportsUi = () => {
  return (
    <div className='w-full h-full'>
       <div className='w-full flex'>
         <div className='w-[17%]'>
            <SportsLeft/>
        </div>
        <div className='w-[63%]'>
            <SportsMiddle/>
        </div>
        <div className='w-[20%]'>
            <SportsRight/>
        </div>
       </div>
    </div>
  )
}

export default SportsUi