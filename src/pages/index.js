import React from 'react'
import Form from '../components/Form'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'


import '../global.css'
import '../styles/layout.css'
import '../styles/typography.css'
import '../styles/buttons.css'
import Autorizari from '../components/autorizari/Autorizari'
import Performanta from '../components/performanta/Performanta'
import Cursuri from '../components/cursuri/Cursuri'

const Index = () => {
    return (
        <Layout>
            <section className="center-layout mt-4 md:mt-32 mb-20 md:mb-32">
                <Hero />
            </section>
            <section className="center-layout mb-10 md:mb-32 overflow-hidden">
                <Cursuri />
            </section>
            <section className="center-layout mb-10 md:mb-32">
                <Performanta />
            </section>
            <section className="center-layout mb-10 md:mb-32">
                <Autorizari />
            </section>
            <section className="center-layout mb-10 md:mb-32">
                <Form />
            </section>
        </Layout>
    )
}

export default Index
