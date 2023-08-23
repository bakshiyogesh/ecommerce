import { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// const handleStart=(e: { preventDefault: () => any; })=>e.preventDefault();
// const imageSliderArray=[<img src="img/voice-assistant.png" onDragStart={handleStart} role="presentation"/>,
// <img src="/img/smart-watch-.jpeg" onDrag={handleStart} role="presentation"/>,
//     <img src="/img/speakers.jpg" onDragStart={handleStart} role="presentation"/>,
//     <img src="/img/headphones-fotor.png" onDragStart={handleStart}  role="presentation"/>
    
// ]

const ImageSlider:FC=()=>{
    return(
    <>
    <section className=" flex-1 m-1 w-screen h-1/2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="/img/mechanical-keyboard.jpeg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/img/camera.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/img/iphone.jpeg"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/img/laptop.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/img/headphones.jpeg"/>
        </SwiperSlide>
         {/* <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
        </SwiperSlide> */}
      </Swiper>
    </section>
    </>)
}
export default ImageSlider;