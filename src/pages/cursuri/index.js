import React from 'react'
import Layout from '../../components/layout/Layout'
import Cursuri from '../../components/cursuri/Cursuri'
import useAirtable from '../../hooks/useAirtable';

const Index = () => {
    let cursuri = useAirtable();
    return (
        <Layout>
            <section className="full-width-layout main-layout min-h-screen bg-blue-100">
                <div className="center-layout mt-10 md:mt-20 xl:mt-32 mb-24 md:mb-32 overflow-hidden">
                    <Cursuri cursuri={cursuri} />
                </div>
            </section>
        </Layout>
    )
}

export default Index
