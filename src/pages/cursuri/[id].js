import React from 'react'
import Layout from '../../components/layout/Layout'

const Cursuri = ({ params }) => {
    return (
        <Layout>
            <section className="center-layout">
                <h1>pagina de  {params.id}</h1>
            </section>
        </Layout>
    )
}

export default Cursuri
