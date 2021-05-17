import React from 'react'

import * as styles from './Performanta.module.css'

const Performanta = () => {
    return (
        <>
            <p className="h3 text-center uppercase text-blue-400 mb-20">De peste 5 ani certificam performanta</p>
            <div className={styles.wrapper}>
                <div className="grid text-center">
                    <p className="text-green-100 h1">1.029+</p>
                    <p>Persoane instruite</p>
                </div>

                <div className="grid text-center">
                    <p className="text-green-100 h1">356</p>
                    <p>Cursuri terminate</p>
                </div>

                <div className="grid text-center">
                    <p className="text-green-100 h1">100%</p>
                    <p>Persoane satisfacute</p>
                </div>
            </div>
        </>
    )
}

export default Performanta
