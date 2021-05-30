import React from 'react'
import Layout from '../../components/layout/Layout'

const index = () => {
    return (
        <Layout>
            <section className="full-width-layout main-layout">
                <div className="center-layout grid md:grid-cols-2 mt-10 md:mt-20 xl:mt-32 mb-24 md:mb-32">
                    <div className="grid">
                        <h2 className="text-yellow-100 uppercase mb-16">Ia legatura cu noi</h2>

                        <div className="grid">
                            <h3 className="text-blue-300 normal-weight mb-2">Print center</h3>
                            <p>300265 TIMIŞOARA</p>
                            <p className="mb-7">Str. Pomiculturii, Nr. 10</p>
                        </div>

                        <div className="grid">
                            <h3 className="text-blue-300 normal-weight mb-2">Persoana de contact</h3>
                            <p className="mb-7">Sărăcin Georgian</p>
                        </div>

                        <div className="grid">
                            <h3 className="text-blue-300 normal-weight mb-2">Tel / fax</h3>
                            <a href="tel:+40256212086" className="p mb-7">0256.212.086</a>
                        </div>

                        <div className="grid">
                            <h3 className="text-blue-300 normal-weight mb-2">Mobil</h3>
                            <a href="tel:+40723400342" className="p">0723.400.342</a>
                            <a href="tel:+40753055762" className="p mb-7">0753.055.762</a>
                        </div>

                        <div className="grid">
                            <h3 className="text-blue-300 normal-weight mb-2">Email</h3>
                            <a href="mailto:office@centrudeservicii.ro" className="p mb-7">office@centrudeservicii.ro</a>
                        </div>
                    </div>
                    <img src="/contact.svg" className="self-center" alt="contact" />
                </div>
            </section>
        </Layout>
    )
}

export default index
