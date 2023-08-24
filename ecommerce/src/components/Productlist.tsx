import { FC } from "react";

const ProductsList:FC=()=>{
    const imageArray=['/img/camera-mirrorless.webp','/img/monitor1.webp','/img/printer.webp','/img/projector.webp','/img/oled.webp','/img/desktop-led.webp','/img/raspberry-pi-removebg-preview.png','/img/laptop-transformed.png','/img/iphone-14.webp','/img/realme.webp','/img/infinix.webp','/img/hair-trimmer.png'];
  //
    return(
<>
     {imageArray.map((item)=>{
       return(
        <div className="grid justify-center m-3">
        <img  className="object-cover"  src={item}/>
        </div>
       )
     })}
</> )
}
export default ProductsList;