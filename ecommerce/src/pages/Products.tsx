import { FC } from "react";
// import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsList from "../components/Productlist";

const Products:FC=()=>{
    return(
    <>
    <Header/>
    <div className="container pt-8 justify-center sm:col-span-2">
      <h4 className="text-center text-3xl m-2 text-slate-500">Our Products are</h4>
      <div className="relative grid grid-cols-4 place-content-center mb-3">
    <ProductsList/>
    </div>
    </div>
    {/* <Card/>  */}
    <Footer/>
    </>)
}
export default Products;