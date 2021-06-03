import React, { useState } from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import Enums from '../../enums/Enums';
import * as styles from './Slider.module.css'


SwiperCore.use([Navigation]);

const Slider = ({ imageName }) => {
    const { SLIDER_CURS } = Enums;
    const [courseList, setCourseList] = useState(SLIDER_CURS.find(curs => curs.name === imageName).list);

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
                    courseList.length > 0 && courseList.map((item, index) => {
                        return <SwiperSlide key={index} className={styles.slide}>
                            <img className={styles.image} src={`/cursuri/${imageName}/${item}`} alt={imageName} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider
