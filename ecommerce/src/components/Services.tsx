import { FC } from "react";

const Services:FC=()=>{
    return(
    <>
    <section className="grid grid-cols-2  sm:grid-cols-2 bg-yellow-600">
     <div className="ml-3">
       <h3 className="text-xl">Subscibe To Our NewsLetter for new Product Information</h3>
       <p>Stay informed for new product arrival and get discount by subscribing our newsletter.</p>
       <form className="flex">
       <input type="text" 
       className="mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <button type="submit" className="bg-slate-400 "/>Subscribe
       </form>
     </div>
    </section>
    </>)
}
export default Services;