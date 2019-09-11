import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div id="nav">
      <Link to="/">Home</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/inspiration">Inspiration</Link>
    </div>
  )
}

export default Nav
