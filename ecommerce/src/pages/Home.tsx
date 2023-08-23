import { FC } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductLogo from "../components/ProductLogo";
// import ImageSlider from "../components/ProdcutSlider";

const HomePage:FC=()=>{
    return(<>
       <Header/>
       <ProductLogo/>
       {/* <ImageSlider/> */}
       <Footer/>
        </>)
}
export default HomePage;