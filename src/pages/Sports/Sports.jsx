
import Navbar from '@/component/Navbar'
import SportsUi from './Components/SportsUi'
import SportsMobileUi from './Components/SportsMobileView/SportsMobileUi'
import JojobetOzel from './Components/JojobetOzel'
import TurkishCasinoGrid from './Components/TurkishCashino'
import TopCasino from './Components/Top20Cashino'
import TopCas from './Components/Top20CanliCashino'
import Pregamatic from './Components/Pragmatic'
import Amusnet from './Components/Amusnet'
import EGT_Digital from './Components/EgtDigital'

const Sports = () => {
  return (
    <div>
      <div className='hidden lg:block'>
        <Navbar/>
      <SportsUi/>
      <JojobetOzel />
      <TurkishCasinoGrid />
      <TopCasino />
      <TopCas />
      <Pregamatic />
      <Amusnet />
      <EGT_Digital />
      </div>
      <div className='lg:hidden'>
        <Navbar/>
        <SportsMobileUi/>
      </div>
    </div>
  )
}

export default Sports