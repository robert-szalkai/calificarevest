import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="full-width-layout my-3">
            <nav className="center-layout flex flex-between">
                <a className="h1" href="/">Cursuri Calificare Vest</a>
                <div>
                    <Link to="/">Acasa</Link>
                    <Link to="/cursuri">Cursuri</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
