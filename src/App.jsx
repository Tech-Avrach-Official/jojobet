import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sports from "./pages/Sports/Sports";
import Home from "./pages/Home/Home";
import PromotionsGrid from "./pages/Promotion/Components/CardGrid";
import AllRoutes from "./routes/routes";

const App = () => {
  return (
   <BrowserRouter>
   <AllRoutes/>
   </BrowserRouter>
  )
}

export default App;