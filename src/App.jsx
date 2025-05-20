
import Navbar from "./component/Navbar";
import TurkishCasino from "./pages/Home/Components/TurkishCashino" ;
import TopCashino from "./pages/Home/Components/Top20Cashino" ;
import Sports from "./pages/Sports/Sports";



const App = () => {
  return (
    <div>
      <Navbar />
      <Sports/>
     {/* <TurkishCasino/>
     <TopCashino/> */}
    </div>
  )
}

export default App

