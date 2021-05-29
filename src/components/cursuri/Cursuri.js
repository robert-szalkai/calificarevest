import { Link } from 'gatsby';
import React, { useContext } from 'react'

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import { AppContext } from '../../context/app-context';
import Enums from '../../enums/Enums';
import * as styles from './Cursuri.module.css'

SwiperCore.use([Navigation]);

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
                        spaceBetween: 20
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
                                <img src={`/${item.image}`} alt="stivuitorist" />
                                <p className={styles.title}>{item.name}</p>
                                <Link className="btn btn-secondary btn-small mb-2" onClick={() => onClickHandler(item)} to={`/#formular`}>Inscrie-te</Link>
                                <Link className="btn btn-primary btn-small" to={`/cursuri/${item.name}`}>Detalii</Link>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Cursuri
