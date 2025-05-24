
import  GamingLayout from "./Components/RandomGame"
import  PokerKlas from "./Components/PokerClas"
import  TurkishCasinoGrid from "./Components/TurkishCashino"
import  JojobetOzel from "./Components/JojobetOzel"
import Top20CanliCasino from "./Components/Top20CanliCashino"
import CanlıOyunlar from "./Components/CanliOyunar"
import  Playmatrix from "./Components/PlayMatrix"
import  Evolution from "./Components/Evolution"
const LiveCashino = () => {
  return (
    <div>
    <div className="px-8 bg-[#1e1e20]">
    <GamingLayout/>
  <PokerKlas/>
  <TurkishCasinoGrid/>
  <JojobetOzel/>
  <Top20CanliCasino/>
  <CanlıOyunlar/>
  <Playmatrix/>
  <Evolution/>
  </div>
    </div>
  )
}

export default LiveCashino;