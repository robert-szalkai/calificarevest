import React from 'react'

import * as styles from './Autorizari.module.css'

const Autorizari = () => {
    return (
        <>
            <p className="h3 text-center text-blue-400 mb-10 md:mb-20">FURNIZOR DE FORMARE PROFESIONALA AUTORIZAT</p>
            <div className={styles.imagesWrap}>
                <img className={styles.image} src={'ministerul_muncii.png'} alt="ministerul-muncii" />
                <img className={styles.image} src={'anc.jpeg'} alt="anc" />
                <img className={styles.image} src={'ministerul_educatiei.jpeg'} alt="ministerul-educatiei" />
            </div>
        </>
    )
}

export default Autorizari
