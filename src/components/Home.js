import React from 'react'
import { Container } from 'reactstrap'
import '../App.css'
import { Link } from "react-router-dom"
import Navigation from './Nav'


class Home extends React.Component {
  state = {
    class: '',
  }
  setClassToShow = () => {
    this.setState({
      class: 'show'
    })
  }
  render () {
    return (
      <Container fluid className="bg-dark">
        <div id="universe" className="bg-dark">
          <Navigation />
        <div id="galaxy">
          <Link to="/">
            <div class="star sun">
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
        </div>
      </Container>
    )
  }
}

export default Home
