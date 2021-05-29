import React, { useContext } from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { AppContext } from '../../context/app-context';
import Enums from '../../enums/Enums';
import * as styles from './Cursuri.module.css'

SwiperCore.use([Navigation]);

const wait = (ms = 500) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

const Cursuri = () => {
    const { LISTA_CURSURI } = Enums;
    const { setSelectedCourse } = useContext(AppContext);

    const onClickHandler = async (course) => {
        setSelectedCourse(course.id);
    }
    return (
        <>
            <p className="h3 text-center uppercase text-blue-400 mb-10 md:mb-20">Cursurile noastre</p>
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    }
                }}
            >
                {
                    LISTA_CURSURI.length > 0 && LISTA_CURSURI.map((item, index) => {
                        return <SwiperSlide key={index} className={styles.slideWrap}>
                            <div className={styles.slide}>
                                <img src={item.image} alt="stivuitorist" />
                                <p className={styles.title}>{item.name}</p>
                                <a href="#formular" onClick={() => onClickHandler(item)} className="btn btn-secondary btn-small justify-self-center">Inscrie-te</a>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Cursuri
