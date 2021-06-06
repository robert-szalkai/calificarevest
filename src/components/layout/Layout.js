import React from 'react'
import Navbar from '../navbar/Navbar'
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/use-sitemetadata';

import CookieConsent from "react-cookie-consent";

import * as styles from './Layout.module.css';
import { Link } from 'gatsby';
import Footer from '../footer/Footer';

const Layout = ({ children, showBackground }) => {
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
                {showBackground && <img className={styles.backgroundImage} src={'/fundalx1400.svg'} alt="fundal" />}
                <Footer />
            </div>
            <CookieConsent
                location="bottom"
                buttonText="Accept"
                cookieName="myAwesomeCookieName2"
                style={{ background: "var(--blue-400)" }}
                className="text-blue-200"
                buttonStyle={{ color: "var(--black)", fontSize: "14px" }}
                expires={150}
            >
                Folosim cookie-uri. Prin continuarea navigării pe Website-ul nostru 
                confirmi acceptarea utilizării fişierelor de tip cookie conform Politicii de Cookie.
                <Link className="hover:underline text-yellow-200 ml-2" to="/cookies">Detalii -&gt; </Link>
            </CookieConsent>
        </>
    )
}

export default Layout
