import { FC } from "react";

const ProductView:FC=()=>{
    return(<>
        <section className="grid sm:grid-flow-col lg:grid-flow-row">
            <img  className="object-cover" src="../../public/img/black-cell-phone-in-a-small-silver-shopping-cart.jpeg" alt="mobile"/>
        </section>
    </>)
}
export default ProductView;