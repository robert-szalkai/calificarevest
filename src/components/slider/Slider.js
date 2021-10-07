import React from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import * as styles from './Slider.module.css'


SwiperCore.use([Navigation]);

const Slider = ({ imageName, images }) => {

    return (
        <>
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                centeredSlides={true}
                breakpoints={{
                }}
            >
                {
                    images.length > 0 && images.map((item, index) => {
                        return <SwiperSlide key={index} className={styles.slide}>
                            <img className={styles.image} src={item.url} alt={imageName} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider
