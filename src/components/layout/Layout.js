import React from 'react'
import Navbar from '../navbar/Navbar'
import Helmet from 'react-helmet';
import useSiteMetadata from '../../hooks/use-sitemetadata';

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
            </div>
        </>
    )
}

export default Layout
