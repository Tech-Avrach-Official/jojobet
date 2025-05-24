import { BrowserRouter } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Sports from "./pages/Sports/Sports";
// import Home from "./pages/Home/Home";
// import PromotionsGrid from "./pages/Promotion/Components/CardGrid";
import AllRoutes from "./routes/routes"; 
import LiveCashino from "./pages/LiveCasino/LiveCasino"

const App = () => {
  return (
   <BrowserRouter>
   {/* <AllRoutes/> */}
     <LiveCashino/>

   </BrowserRouter>
  );
};

export default App;




