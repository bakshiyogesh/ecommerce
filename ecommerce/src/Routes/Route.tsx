import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { BrowserRouter,Route, } from "react-router-dom";
import Error from "../pages/Error";
import HomePage from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../components/Cart";
 const Approuter=()=>{
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    )
 }
 export default Approuter;