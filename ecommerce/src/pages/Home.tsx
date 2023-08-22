import { FC } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductLogo from "../components/ProductLogo";
import ImageSlider from "../components/ProdcutSlider";
import Services from "../components/Services";

const HomePage:FC=()=>{
    return(<>
       <Header/>
       <ProductLogo/>
       <ImageSlider/>
       <Services/>
       <Footer/>
        </>)
}
export default HomePage;