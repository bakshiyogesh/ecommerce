import { FC } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products:FC=()=>{
    return(
    <>
    <Header/>
    <div className="grid grid-col-3 pt-8 justify-center">
      <h4 className="text-center text-3xl m-2 text-slate-500">Our Products are</h4>
    </div>
    <Card/> 
    <Footer/>
    </>)
}
export default Products;