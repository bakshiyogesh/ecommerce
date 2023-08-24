import { FC } from "react";
// import MenuIcon from '@mui/icons-material/Menu';
const Header:FC=()=>{
    return(<>
<header className="grid min-w-full fixed z-50">
    <nav className="flex sm:justify-center space-x-4  bg-gray-800">
            <img src="/img/logo-no-background.svg" className="w-full h-10 " alt="logo image"/>
  {[
    ['Home', '/'],
    ['Products', '/Products'],
    ['Cart', '/Cart'],
    ['SignUp','/SignUp']

  ].map(([title, url]) => (<div>
    <a href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900 hover:underline decoration-yellow-700 text-left">{title}</a>
    </div>
  ))}
  {/* <MenuIcon className="lg:hidden"/> */}
</nav>
</header>
    </>)
}
export default Header;