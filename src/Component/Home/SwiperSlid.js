import React from 'react';
import img1 from '../../images/blogImg1.jpg'
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// install Swiper components

import { Swiper, SwiperSlide } from 'swiper/react';
// swiper bundle styles
import 'swiper/swiper-bundle.css'

// swiper core styles
import 'swiper/swiper.scss'
// modules styles
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const SwiperSlid = () => {
    
    return (
        <Swiper
        breakpoints={{
            // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
          }}
       
        loop={true}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default SwiperSlid;