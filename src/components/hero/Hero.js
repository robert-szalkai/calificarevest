import React from 'react'

import * as styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className="grid justify-center content-center">
                <h2 className="mb-6 text-blue-400 text-center md:text-left">
                    Cursuri <br/> 
                    de calificare
                </h2>
                <p className="mb-3 text-blue-300">
                    Construieste-ti cariera dorita, pas cu pas,<br/> 
                    cu ajutorul servicilor noastre de cea mai <br/> 
                    inalta calitate
                </p>
                <p className="uppercase text-blue-300 mb-5"> Toate pe teritoriul Romaniei</p>
                <a href="#cursuri" className="btn btn-primary btn-small justify-self-start">Vezi cursurile</a>
            </div>
            <div className={["grid", styles.imageWrapper].join(' ')}>
                <div className={styles.imageShadow}></div>
                <img className="col-start-1 col-end-2 row-start-1 row-end-2" src={'harta.svg'} alt="teacher"/>
            </div>
        </div>
    )
}

export default Hero
