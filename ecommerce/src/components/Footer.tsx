import { FC } from "react";

const Footer:FC=()=>{
 return (<>
     <footer className="flex justify-center w-full bg-black text-white h-9 fixed min-w-full">
        <h4 className="text">© 2023 <span className="text-yellow-700 mr-3 ml-2">EMarket</span>All   rights reserved </h4>
     </footer>
      </>)
}
export default Footer;