import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <Link to="/">
        <div class="star sun">
          <h3>Home</h3>
        </div>
      </Link>

      <div class="planet mercury"></div>
      <div class="planet venus"></div>

      <Link to="/bio">
        <div class="planet earth">
          <h3>Bio</h3>
        </div>
      </Link>

      <div class="planet mars"></div>

      <Link to="/projects"><div class="planet jupiter"></div></Link>

      <Link to="/contact"><div class="planet saturn"></div></Link>

      <div class="planet uranus"></div>
      <div class="planet neptune"></div>
      <div class="planet pluto"></div>

      <div class="orbit-mercury"></div>
      <div class="orbit-venus"></div>
      <div class="orbit-earth"></div>
      <div class="orbit-mars"></div>
      <div class="orbit-jupiter"></div>
      <div class="orbit-saturn"></div>
      <div class="orbit-uranus"></div>
      <div class="orbit-neptune"></div>
      <div class="orbit-pluto"></div>
    </div>
  )
}

export default Home
