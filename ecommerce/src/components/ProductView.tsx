import { FC } from "react";

const ProductView:FC=()=>{
    return(<>
        <section className="grid grid-flow-row  w-screen sm:grid-flow-col grid-cols-2">
            <div className="max-w-full mt-1">
               <img  className="" src="../../public/img/E-commerce-Animated-GIF.gif" alt="mobile"/>
            </div>
            <div className="flex justify-center  align-middle flex-col max-w-full ml-2 ">
               <h2 className="xl:text-2xl text-center">The Power of Shopping Lies Within Your Fingertips!</h2>
               <img className="w-1/3 min-h-1/2" src="../../public/img/logo-no-background.svg"/>
            </div>
        </section>
    </>)
}
export default ProductView;