import { FC } from "react";
const Header:FC=()=>{
    return(<>
<header className=" w-screen">
    <nav className="flex sm:justify-center space-x-4 max-w-full bg-lime-200 w-screen">
            <img src="../../public/img/logo-black.svg" className="w-full h-10 " alt="logo image"/>
  {[
    ['Home', '/dashboard'],
    ['Products', '/team'],
    ['Shipping', '/projects'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 hover:underline decoration-yellow-700 text-left">{title}</a>
  ))}
  <div className="inline top-0  ">
    {/* <h6> Cart</h6> */}
  </div>
</nav>
</header>
    </>)
}
export default Header;