import React from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
    return (
        <div className="body-container">
            <Navbar />
            <main className="full-width-layout">{children}</main>
        </div>
    )
}

export default Layout
