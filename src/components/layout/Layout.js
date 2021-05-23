import React from 'react'
import Navbar from '../navbar/Navbar'
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/use-sitemetadata';

import * as styles from './Layout.module.css';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="ro" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="body-container">
                <Navbar />
                <main className="full-width-layout">{children}</main>
                <img className={styles.backgroundImage} src={'fundalx1400.svg'} alt="fundal"/>
            </div>
        </>
    )
}

export default Layout
