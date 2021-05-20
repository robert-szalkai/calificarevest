import React from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import LISTA_CURSURI from '../../enums/ListaCursuri';
import * as styles from './Cursuri.module.css'

SwiperCore.use([Navigation]);

const Cursuri = () => {
    return (
        <>
            <p className="h3 text-center uppercase text-blue-400 mb-10 md:mb-20">Cursurile noastre</p>
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                centeredSlides={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.3,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30
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
                                <p className="h3 text-yellow-100 whitespace-nowrap">{item.date}</p>
                                <img src={item.image} alt="stivuitorist" />
                                <p className="h4 text-blue-300">{item.name}</p>
                                <button className="btn btn-secondary btn-big">Inscrie-te</button>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Cursuri
