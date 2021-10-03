import React from 'react'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'


import '../global.css'
import '../styles/layout.css'
import '../styles/typography.css'
import '../styles/buttons.css'
import '../styles/form-components.css'
import Autorizari from '../components/autorizari/Autorizari'
import Performanta from '../components/performanta/Performanta'
import Cursuri from '../components/cursuri/Cursuri'
import AppContextProvider from '../context/app-context'
import Formular from '../components/formular/Formular'
import useAirtable from '../hooks/useAirtable'

const Index = ({location}) => {

    let cursuri = useAirtable();

    return (
        <AppContextProvider>
            <Layout showBackground={true}>
                <section className="center-layout mt-10 md:mt-20 xl:mt-32 mb-24 md:mb-32">
                    <Hero />
                </section>
                <section id="cursuri" className="center-layout mb-24 md:mb-32 overflow-hidden">
                    <Cursuri cursuri={cursuri} />
                </section>
                <section className="center-layout mb-24 md:mb-32">
                    <Performanta />
                </section>
                <section className="center-layout mb-24 md:mb-32">
                    <Autorizari />
                </section>
                <section id="formular" className="main-layout full-width-layout bg-light-blue-custom">
                    <div className="center-layout py-20 md:py-40">
                        <Formular cursuri={cursuri} location={location}/>
                    </div>
                </section>
            </Layout>
        </AppContextProvider>
    )
}

export default Index
