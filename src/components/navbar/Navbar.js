import { Link } from 'gatsby'
import React from 'react'

import * as styles from './Navbar.module.css';
import CloseIcon from '../../assets/img/close-icon-black.svg';

const Navbar = () => {
    return (
        <header className="full-width-layout py-5">
            <nav className="center-layout flex justify-between">
                <Link className="h3 text-blue-400" to="/">Calificari Vest</Link>
                <div className={`flex items-center gap-x-20 ${styles.desktopLinks}`}>
                    <Link className={styles.link} activeClassName={styles.active} to="/">Acasa</Link>
                    <Link className={styles.link} activeClassName={styles.active} to="/cursuri">Cursuri</Link>
                    {/* <Link className={styles.link} activeClassName={styles.active} to="/despre-noi">Despre noi</Link> */}
                    <Link className={styles.link} activeClassName={styles.active} to="/contact">Contact</Link>
                </div>

                <div className={styles.navbarMobileMenu}>
                    <input className={`hidden ${styles.navbarMobileToggle}`} type="checkbox" id="navbar-mobile-toggle" />
                    <label htmlFor="navbar-mobile-toggle" className={styles.navbarMobileButton}>
                        <span className={styles.navbarMobileLine}></span>
                    </label>
                    <div className={styles.navbarMobileList}>
                        <div className="flex justify-between items-center mb-6">
                            <p className="h3 text-blue-400">Meniu</p>
                            <label htmlFor="navbar-mobile-toggle" className={styles.navbarMobileButton}>
                                <img src={CloseIcon} alt="close"/>
                            </label>
                        </div>
                        <Link className={styles.link} activeClassName={styles.active} to="/">Acasa</Link>
                        <Link className={styles.link} activeClassName={styles.active} to="/cursuri">Cursuri</Link>
                        {/* <Link className={styles.link} activeClassName={styles.active} to="/despre-noi">Despre noi</Link> */}
                        <Link className={styles.link} activeClassName={styles.active} to="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
