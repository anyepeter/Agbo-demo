import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import {  Autoplay, EffectFade, Navigation, Thumbs } from 'swiper/modules';

import './gallery.css';

const Gallery = ({image}) => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const thumbsSwiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };
  return (
    <>
    <div className='w-full h-[100%] relative' >
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        effect={'fade'}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        modules={[EffectFade, Autoplay, Navigation, Thumbs]}
        className="mySwiper2"
        onSlideChange={handleSlideChange}
      >
        {image && image.map((item, index) => (
          <SwiperSlide key={index}>
          <img src={item} />
          </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={10}
        // freeMode={true}
        watchSlidesProgress={true}
        modules={[EffectFade, Navigation, Thumbs]}
        className="mySwiper"
      >
      {image && image.map((item, index) => (
          <SwiperSlide key={index}>
          <img src={item} />
          </SwiperSlide>
          ))}
      </Swiper> 
      </div>
    </>
  );

};


export default Gallery;


