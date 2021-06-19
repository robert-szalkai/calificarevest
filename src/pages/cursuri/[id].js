import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import DetaliiCurs from '../../components/detaliiCurs/DetaliiCurs'
import Layout from '../../components/layout/Layout'
import Slider from '../../components/slider/Slider'
import Enums from '../../enums/Enums'

const Cursuri = ({ params, location }) => {
    const { LISTA_CURSURI } = Enums;

    const [curs, setCurs] = useState(location.state?.curs || {});

    useEffect(() => {
        if ((location.state && !location.state.curs) || !location.state) {
            let result = LISTA_CURSURI.find(curs => curs.url === params.id);
            setCurs(result || {});
        }
    }, [])
    return (
        <Layout>
            {Object.keys(curs).length > 0 ? <>
                <section className="center-layout mt-10 md:mt-14 xl:mt-18 mb-5 overflow-hidden">
                    <h1 className="h3 text-center uppercase text-blue-400 mb-10">Curs {curs.name}</h1>
                    <Slider imageName={curs.short}/>
                </section>

                <section className="main-layout full-width-layout">
                    <img className="row-start-1 row-end-2 col-start-1 col-end-4 w-full h-full object-cover" src={'/hero-2.svg'} alt="wave" />
                    <div className="center-layout row-start-1 row-end-2 py-20 md:py-40 z-10">
                        <DetaliiCurs curs={curs} />
                    </div>
                </section>
            </> : <section className="center-layout grid">
                <p className="h3 text-center mt-10 mb-10">Cursul nu exista</p>
                <Link className="btn btn-primary btn-big justify-self-center" to="/">Acasa</Link>
            </section>
            }
        </Layout>
    )
}

export default Cursuri
