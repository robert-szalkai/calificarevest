import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/navbar/Navbar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../global.css'
import '../styles/layout.css'
import '../styles/typography.css'
import Courses from '../components/courses/Courses';
import { Home } from '../components/home/Home';

const Index = () => {
    return (
        <div className="body-container">
            <Router>
                <Navbar />
                <h1>Send a message</h1>
                <Form />

                <Switch>
                    <Route path="/cursuri">
                        <Courses />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Index
