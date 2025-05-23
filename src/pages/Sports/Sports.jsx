
import Navbar from '@/component/Navbar'
import SportsUi from './Components/SportsUi'
import JojobetOzel from './Components/JojobetOzel'
import Amusnet from './Components/Amusnet'
import EGT_Digital from './Components/EgtDigital'
import Pregamatic from './Components/Pragmatic'
import Top20CanliCasino from './Components/Top20CanliCashino'
import TopCashino from './Components/Top20Cashino'
import TurkishCasino from './Components/TurkishCashino'

const Sports = () => {
  return (
    <div className="bg-[#1E1E20]">
      <Navbar/>
      <SportsUi/>
      <JojobetOzel/>
         <TurkishCasino/>
        <TopCashino/>
        <Top20CanliCasino/>
         <Pregamatic/>
         <Amusnet/>
         <EGT_Digital/>
    </div>
  )
}

export default Sports