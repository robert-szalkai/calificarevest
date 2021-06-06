import { Link } from 'gatsby'
import React from 'react'

import * as styles from './Footer.module.css';


const Footer = () => {
    return (
        <footer className="full-width-layout main-layout bg-blue-400">
            <section className={["center-layout text-white py-10", styles.footerContainer].join(' ')}>
                <Link className="h3 mb-10 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-3" to="/">Calificari Vest</Link>
                <div className="grid">
                    <h4 className="normal-weight mb-2">SC Print Center SRL</h4>
                    <p>300265 TIMIŞOARA</p>
                    <p className="mb-7">Str. Pomiculturii, Nr. 10</p>
                    <h4 className="normal-weight mb-2">Tel / fax</h4>
                    <a href="tel:+40256212086" className="p mb-7">0256.212.086</a>
                    <h4 className="normal-weight mb-2">Mobil</h4>
                    <a href="tel:+40723400342" className="p">0723.400.342</a>
                    <a href="tel:+40753055762" className="p mb-7">0753.055.762</a>
                </div>
                <div className="grid content-start gap-y-4">
                    <Link className="p" to="/">Acasa</Link>
                    <Link className="p" to="/cursuri">Cursuri</Link>
                    {/* <Link className="p" to="/despre-noi">Despre noi</Link> */}
                    <Link className="p" to="/contact">Contact</Link>
                    <Link className="p" to="/cookies">Politica de cookies</Link>
                    <Link className="p" to="/">Termeni si conditii</Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer
