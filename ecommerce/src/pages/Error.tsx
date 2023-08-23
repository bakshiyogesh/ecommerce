import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error:FC=()=>{
  return(<>
  <Header/>
    <section className="grid place-content-center">
      <img src="/img/error.jpg" className="mt-2"/>
      <p className="text-center">Go back to Home</p>
    </section>
    <Footer/>
  </>)
}
export default Error;