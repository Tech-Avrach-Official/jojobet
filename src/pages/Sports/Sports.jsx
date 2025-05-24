
import Navbar from '@/component/Navbar'
import SportsUi from './Components/SportsUi'
import SportsMobileUi from './Components/SportsMobileView/SportsMobileUi'

const Sports = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar/>
      <SportsUi/>
      
      </div>
      <div className='md:hidden'>
        <Navbar/>
        <SportsMobileUi/>
      </div>
    </div>
  )
}

export default Sports