import { FC } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductView from "../components/ProductView";

const HomePage:FC=()=>{
    return(<>
       <Header/>
       <ProductView/>
       <Footer/>
        </>)
}
export default HomePage;