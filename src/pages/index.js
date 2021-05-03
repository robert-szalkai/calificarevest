import React from 'react'
import Form from '../components/Form'
import Layout from '../components/layout/Layout'


import '../global.css'
import '../styles/layout.css'
import '../styles/typography.css'

const Index = () => {
    return (
        <Layout>
            <section className="center-layout">
                <Form />
            </section>
        </Layout>
    )
}

export default Index
