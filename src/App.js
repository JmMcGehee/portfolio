import React from 'react'
// import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/Home'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Inspiration from './components/Inspiration'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/inspiration" component={Inspiration} />
    </Router>
  )
}

export default App;
