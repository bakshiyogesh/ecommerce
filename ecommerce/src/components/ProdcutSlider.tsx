import { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
const handleStart=(e: { preventDefault: () => any; })=>e.preventDefault();
const imageSliderArray=[<img src="img/voice-assistant.png" onDragStart={handleStart} role="presentation"/>,
<img src="/img/smart-watch-.jpeg" onDrag={handleStart} role="presentation"/>,
    <img src="/img/speakers.jpg" onDragStart={handleStart} role="presentation"/>,
    <img src="/img/headphones-fotor.png" onDragStart={handleStart}  role="presentation"/>
    
]

const ImageSlider:FC=()=>{
    return(
    <>
    <section className="bg-yellow-300  m-1 w-screen h-fit">
    <AliceCarousel mouseTracking items={imageSliderArray} animationDuration={800}  autoHeight autoWidth disableButtonsControls infinite autoPlay/>
    {/* <img src="img/voice-assistant.png"/> */}
    </section>
    </>)
}
export default ImageSlider;