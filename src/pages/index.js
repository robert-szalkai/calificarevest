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

const Index = () => {
    return (
        <Layout>
            <section className="center-layout mt-16 md:mt-32 mb-16 md:mb-32">
                <Hero />
            </section>
            <section className="center-layout mb-16 md:mb-32">
                <Performanta />
            </section>
            <section className="center-layout mb-16 md:mb-32">
                <Autorizari />
            </section>
            <section className="center-layout mb-16 md:mb-32">
                <Form />
            </section>
        </Layout>
    )
}

export default Index
