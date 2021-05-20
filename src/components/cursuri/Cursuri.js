import React from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import * as styles from './Cursuri.module.css'

SwiperCore.use([Navigation]);

const Cursuri = () => {
    return (
        <>
            <p className="h3 text-center uppercase text-blue-400 mb-20">Cursurile noastre</p>
            <Swiper
                navigation={true}
                spaceBetween={50}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
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
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">5 mai</p>
                        <img src={'stivuitorist.svg'} alt="stivuitorist" />
                        <p className="h4 text-blue-300">Curs Stivuitorist</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">23 mai</p>
                        <img src={'masinist.svg'} alt="masinist" />
                        <p className="h4 text-blue-300">Curs Masinist Terasamente</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">2 iunie</p>
                        <img src={'sudor.svg'} alt="sudor" />
                        <p className="h4 text-blue-300">Curs Sudor</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">10 iunie</p>
                        <img src={'stivuitorist.svg'} alt="stivuitorist" />
                        <p className="h4 text-blue-300">Curs Tuns iarba</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">23 august</p>
                        <img src={'masinist.svg'} alt="masinist" />
                        <p className="h4 text-blue-300">Curs Masinist Terasamente</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">20 septembrie</p>
                        <img src={'stivuitorist.svg'} alt="stivuitorist" />
                        <p className="h4 text-blue-300">Curs Stivuitorist</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <p className="h3 text-yellow-100 whitespace-nowrap">1 noiembrie</p>
                        <img src={'stivuitorist.svg'} alt="stivuitorist" />
                        <p className="h4 text-blue-300">Curs Tuns iarba</p>
                        <button className="btn btn-secondary btn-big">Inscrie-te</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Cursuri
