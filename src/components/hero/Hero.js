import React from 'react'

import * as styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className="text-center md:text-left grid justify-center content-start">
                <h2 className="mb-6">
                    Cursuri <br/> 
                    de calificare
                </h2>
                <p className="mb-3">
                    Construieste-ti cariera dorita, pas cu pas,<br/> 
                    cu ajutorul servicilor noastre de cea mai <br/> 
                    inalta calitate
                </p>
                <p className="uppercase mb-5"> Toate pe teritoriul Romaniei</p>
                <button className="btn btn-green btn-big">Vezi cursurile</button>
            </div>
            <img src={'hero.svg'} alt="teacher"/>
        </div>
    )
}

export default Hero
