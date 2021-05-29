import React from 'react'
import Layout from '../../components/layout/Layout'

const index = () => {
    return (
        <Layout>
            <section className="full-width-layout main-layout">
                <div className="center-layout mt-10 md:mt-20 xl:mt-32 mb-24 md:mb-32">
                    <h2 className="text-yellow-100 uppercase mb-32">Ia legatura cu noi</h2>

                    <h3 className="text-blue-300 normal-weight mb-2">Print center</h3>
                    <p>300265 TIMIŞOARA</p>
                    <p className="mb-10">Str. Pomiculturii, Nr. 10</p>

                    <h3 className="text-blue-300 normal-weight mb-2">Persoana de contact</h3>
                    <p className="mb-10">Sărăcin Georgian</p>

                    <h3 className="text-blue-300 normal-weight mb-2">Tel / fax</h3>
                    <p className="mb-10">0256.212.086</p>

                    <h3 className="text-blue-300 normal-weight mb-2">Mobil</h3>
                    <p>0723.400.342</p>
                    <p className="mb-10">0753.055.762</p>

                    <h3 className="text-blue-300 normal-weight mb-2">Email</h3>
                    <p className="mb-10">office@centrudeservicii.ro</p>
                </div>
            </section>
        </Layout>
    )
}

export default index
