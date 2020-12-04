import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
import Contact from './pages/Contact'

const App = ()=> {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' component={Products} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </Router>
            
        </>
    )
}

export default App