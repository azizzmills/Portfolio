import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import './Swiper_slider.css'

import CSS from './images/css.png'
import JavaScript from './images/javascript.jpg'
import C_plus from './images/c++.jpg'
import c_sharp from './images/c_sharp.jpg'
import mongo from './images/mongo.jpg'
import react_logo from './images/react.png'
import python from './images/python.jpg'
import MSQL from './images/MySQL.png'
import github from './images/github.jpg'
import bootstrap from './images/bootstrap.png'
import tailwind from './images/tailwind.png'
import typescript from './images/Typescript.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {EffectCoverflow, Pagination, Navigation, Autoplay} from "swiper/modules"

const ImageSlider = () =>{
    return(
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{delay:1000}}
        coverflowEffect={{
            rotate : 0,
            stretch: 0,
            depth : 100,
            modifier: 2.5,
        }}
        pagination={{el:'.swiper_pagination',clickable:true}}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true,
        }}
        modules={[EffectCoverflow,Pagination,Navigation, Autoplay]}
        className="swiper_container"
        
        >

            <SwiperSlide>
                <img src={CSS} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={JavaScript} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={python} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={c_sharp} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={C_plus} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={tailwind} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MSQL} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={bootstrap} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={typescript} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={react_logo} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={mongo} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={github} />
            </SwiperSlide>
            <div className="slider-controler">
            {/*<div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
    </div>*/}
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    )
}
export default ImageSlider;
