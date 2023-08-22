import { FC } from "react";

const ProductLogo:FC=()=>{
    return(<>
        <section className="grid gap-2 grid-cols-2 sm:grid-col-2 grid-flow-row">
            <div className="w-max m-2">
               <img  className="" src="/img/baskegiphy.gif" alt="mobile"/>
            </div>
            <div className="w-auto">
            <h2 className="text-lg sm:text-md">The Power of Shopping Lies Within Your Fingertips!</h2>
               <img  className="w-1/2" src="/img/logo-no-background.svg" alt="mobile"/>
            </div>
            {/* <div className="w-1/2">
               <h2 className="xl:text-2xl text-center">The Power of Shopping Lies Within Your Fingertips!</h2>
               <img className=" w-1/3 justify-center" src="../../public/img/logo-no-background.svg"/>
            </div> */}
        </section>
    </>)
}
export default ProductLogo;