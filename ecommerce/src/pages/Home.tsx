import { FC } from "react"
import Footer from "../components/Footer";

const HomePage:FC=()=>{

    return(<>
        <nav className="flex sm:justify-center space-x-4">
            <img src="../assets/ecommerce-low-resolution-logo-color-on-transparent-background.png" className="w-full" alt="logo image"/>
  {[
    ['Home', '/dashboard'],
    ['Products', '/team'],
    ['Categories', '/projects'],
    ['Login/SignUP', '/reports'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
       
       <Footer/>
        </>)
}
export default HomePage;