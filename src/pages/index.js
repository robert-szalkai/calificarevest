import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/navbar/Navbar'


import '../global.css'
import '../styles/layout.css'
import '../styles/typography.css'
import Courses from '../components/courses/Courses';
import Home from '../components/home/Home'

const Index = () => {
    return (
        <div className="body-container">
            <Navbar />
            <h1>Send a message</h1>
            <Form />
            <Courses />
            <Home />
        </div>
    )
}

export default Index
