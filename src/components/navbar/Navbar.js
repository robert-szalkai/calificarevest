import React from 'react'

const Navbar = () => {
    return (
        <header className="full-width-layout my-3">
            <nav className="center-layout flex flex-between">
                <a className="h1" href="/">Cursuri Calificare Vest</a>
                <div>
                    <a href="/">Acasa</a>
                    <a href="/cursuri">Cursuri</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
