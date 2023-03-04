import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Reuseable/slider.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
    <div className="banner-slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={'./images/final/1.png'} style={{cursor:'pointer'}}/>
          
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={'./images/banner4.jpg'} />
        <div  className="bannerfirsttext">
            <h2> High Premium And Organic Products WE SELL WHAT'S GOOD FOR YOU</h2>
            <p>We Supply High Premium And Organic Products</p>
            <button>ORDER NOW </button>
          </div>
        </SwiperSlide> */}
      
      </Swiper>
      </div>
    </>
  );
}
