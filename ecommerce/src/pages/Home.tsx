import { FC } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductLogo from "../components/ProductLogo";
import TextBlock from "../components/TextBlock";
// import ImageSlider from "../components/ProdcutSlider";

const HomePage:FC=()=>{
    return(<>
       <Header/>
       <ProductLogo/>
       {/* <ImageSlider/> */}
       <TextBlock/>
       <Footer/>
        </>)
}
export default HomePage;